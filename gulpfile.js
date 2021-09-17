var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var sass = require("gulp-sass")(require("sass"));
var deploy = require("gulp-gh-pages");

/**
 * Push build to gh-pages
 */
gulp.task("deploy", function () {
  return gulp.src("./dist/**/*").pipe(deploy());
});

gulp.task("deploy", function () {
  return gulp.src("./app/**/*").pipe(
    deploy({
      remoteUrl: "https://github.com/dwi-joko/yello-ribbon/tree/main/app",
      branch: "main",
    })
  );
});

// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function () {
  return gulp.src("app/scss/*.scss").pipe(sass()).pipe(gulp.dest("app/css")).pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task(
  "serve",
  gulp.series("sass", function () {
    browserSync.init({
      server: "./app/",
    });

    gulp.watch("app/scss/*.scss", gulp.series("sass"));
    gulp.watch("app/*.html").on("change", browserSync.reload);
  })
);

gulp.task("default", gulp.series("serve"));
