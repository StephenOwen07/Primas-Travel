var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');

// concat and minify JS
gulp.task('scripts', function () {
  gulp.src('js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// minify css
gulp.task('css', function () {
  return gulp.src('css/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'));
});

// default task
gulp.task('default', ['scripts', 'css']);