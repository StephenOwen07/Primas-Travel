var gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("autoprefixer"),
  browserSync = require("browser-sync").create(),
  webpack = require("webpack");

/******************************************** 
              Styles tasks
 *******************************************/
gulp.task("sass", function() {
  return gulp.src("src/assets/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/temp/styles"));
});


/******************************************** 
              HTML tasks 
 *******************************************/
gulp.task("html", function() {});

/******************************************** 
              JS tasks 
 *******************************************/
gulp.task("scripts", function() {
  webpack(require("webpack.config.js"), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

/******************************************** 
              Watch tasks 
 *******************************************/
gulp.task("watch", function() {
  browserSync.init({
    server: {
      baseDir: "src"
    }
  });
  // Watch html
  gulp.watch("src/*.html", function() {
    browserSync.reload();
  });
  // Watch styles
  gulp.watch("src/assets/scss/**/*.scss", ["cssInject"]);
  // Watch js
  gulp.watch("src/assets/js/**/*.js", ["scriptsRefresh"]);
});

// Css Inject
gulp.task("cssInject", ["sass"], function() {
  return gulp.src("src/temp/styles/main.css")
  .pipe(browserSync.stream());
});




gulp.task("scriptsRefresh", ["scripts"], function() {
  browserSync.reload();
});
