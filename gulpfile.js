var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');
var GulpSSH = require('gulp-ssh');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');

var config = {
  root: 'dist'
};

var sshConfig = {
  host: '192.168.1.105',
  username: 'wanbao',
  password: 'wanbao'
};

var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: sshConfig
});


gulp.task('js', function(cb) {
  pump([gulp.src('./js/*.js'),
      rev(),
      uglify(),
      gulp.dest(config.root + '/js'),
      rev.manifest(),
      gulp.dest('rev/js')
    ],
    cb);
});
gulp.task('css', function() {
  return gulp.src('./css/*.css')
    .pipe(rev())
    .pipe(cssnano())
    .pipe(gulp.dest(config.root + '/css'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev/css'));
});

gulp.task('image', function() {
  return gulp.src('./images/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest(config.root + '/images/'));
});

gulp.task('html', function() {
  gulp.src(['rev/**/*.json', './*.html'])
    .pipe(revCollector({
      replaceReved: true,
      dirReplacements: {
        'css': '/dist/css',
        '/js/': '/dist/js/'
      }
    }))
    .pipe(minifyHTML({
      empty: true,
      spare: true
    }))
    .pipe(gulp.dest(config.root + '/'))
});

gulp.task('dest', ['js', 'css', 'image', 'html'], function() {
  return gulp.src('/dist')
    .pipe(gulpSSH.dest('/web'));
});

gulp.task('default', ['dest']);
