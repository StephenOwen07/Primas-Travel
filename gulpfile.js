var gulp = require('gulp');
var uglify = require('gulp-uglify');

/* 
  -- TOP LEVEL FUNCTIONS --
  gulp.task - Define task
  gulp.src - Point to files to use
  gulp.dest - Point to folder to output
  gulp.watch - Watch files and folders for changes
  */


// Minify JS
gulp.task('minify', function () {
  gulp.src('app/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});



// Default task
gulp.task('default', ['minify']);

// Watch task
gulp.task('watch', function () {
  gulp.watch('app/js/*.js', ['minify;']);
});