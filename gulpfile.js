var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');

// autoprefix task
gulp.task('prefix', function () {
  return gulp.src('css/main.css')
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('css/'));
});

// minify images task
gulp.task('image', function () {
  return gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img'));
});