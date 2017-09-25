var gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  browserSync = require("browser-sync").create(),
  webpack = require("webpack");

/******************************************** 
              Styles tasks
 *******************************************/
gulp.task("sass", function () {
  return gulp.src("src/assets/scss/**/*.scss")
    .pipe(sass())

    .on("error", function (errorInfo) {
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(autoprefixer("last 2 versions"))
    .pipe(gulp.dest("src/temp/styles"))
    .pipe(browserSync.stream());
});


/******************************************** 
              HTML tasks 
 *******************************************/
gulp.task("html", function () { });

/******************************************** 
              JS tasks 
 *******************************************/
gulp.task("scripts", function (callback) {
  webpack(require("./webpack.config.js"), function (err, stats) {
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
gulp.task("watch", function () {
  browserSync.init({
    server: {
      baseDir: "src"
    }
  });
  // Watch html
  gulp.watch("src/*.html", function () {
    browserSync.reload();
  });
  // Watch styles
  gulp.watch("src/assets/scss/**/*.scss", ["sass"]);

  // Watch js
  gulp.watch("src/assets/js/**/*.js", ["scriptsRefresh"]);
});

gulp.task("scriptsRefresh", ["scripts"], function () {
  browserSync.reload();
});
