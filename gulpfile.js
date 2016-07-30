var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');
var GulpSSH = require('gulp-ssh');

var config = {
  root: 'dist'
};

var sshConfig = {
  host: '192.168.1.106',
  port: '22',
  username: 'wanbao',
  password: 'wanbao'
};

var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: sshConfig
});


gulp.task('js', function(cb) {
  pump([gulp.src('./js/*.js'),
      uglify(),
      gulp.dest('dist/js/')
    ],
    cb);
});
gulp.task('css', function() {
  return gulp.src('./css/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('image', function() {
  return gulp.src('./images/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest(config.root + '/images/'));
});

gulp.task('html', function() {
  return gulp.src('./**/*.html')
    .pipe(minifyHTML({
      empty: true,
      spare: true
    }))
    .pipe(gulp.dest(config.root + '/'))
});

gulp.task('deploy', function() {
  return gulp.src('/dist/**/*.*')
    .pipe(gulpSSH.dest('/web'));
});

gulp.task('default', ['js', 'css', 'image', 'html']);
