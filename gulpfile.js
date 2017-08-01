var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

/* 
  -- TOP LEVEL FUNCTIONS --
  gulp.task - Define task
  gulp.src - Point to files to use
  gulp.dest - Point to folder to output
  gulp.watch - Watch files and folders for changes
  */

// Copy src files to docs
gulp.task('copy', function () {
  gulp.src('src/*.html')
    .pipe(gulp.dest('docs'));
  gulp.src('src/css/*.css')
    .pipe(gulp.dest('docs/css'));
  gulp.src('src/font/**')
    .pipe(gulp.dest('docs/font'));
  gulp.src('src/img/**')
    .pipe(gulp.dest('docs/img'));
  gulp.src('src/slick/**')
    .pipe(gulp.dest('docs/slick'));
});



// Minify and concat JS
gulp.task('scripts', function () {
  gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('docs/js'));
});

// Default task
gulp.task('default', ['copy', 'scripts']);

// Watch task
gulp.task('watch', function () {
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/css/*css', ['copy']);
  gulp.watch('src/img/*.js', ['copy']);
  gulp.watch('src/*.html', ['copy']);
});