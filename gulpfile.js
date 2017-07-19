var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

// minify images task
gulp.task('image', function () {
  return gulp.src('img/*/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img'));
});