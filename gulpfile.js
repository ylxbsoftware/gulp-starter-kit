var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');

var config = {
    root: 'dist'
};

gulp.task('js', function() {
    return gulp.src('./js/*.js')
        .pipe(uglify({
            compress: {
                drop_console: true
            }
        }))
        .pipe(gulp.dest(config.root + '/js'));
});

gulp.task('html', function() {
    return gulp.src('./*.html')
        .pipe(htmlmin())
        .pipe(gulp.dest(config.root + '/'))
});

gulp.task('image', function() {
    return gulp.src('./images/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest(config.root + '/images/'));
});

gulp.task('css', function() {
    return gulp.src('./css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest(config.root + '/css'));
});

gulp.task('default', ['js', 'html', 'css', 'image']);
