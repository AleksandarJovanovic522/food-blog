const gulp = require('gulp'),
  uglifyes = require('uglify-es'),
  composer = require('gulp-uglify/composer'),
  uglify = composer(uglifyes, console),
  imgMin = require('gulp-imagemin'),
  prefix = require('gulp-autoprefixer'),
  uglifyCss = require('gulp-uglifycss');

//COMPILES JS
//UGLIFIES JS
gulp.task('script', function () {
  return gulp.src('prod/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});
//COMPRESS IMAGES
gulp.task('image', function () {
  return gulp.src('prod/images/*')
    .pipe(imgMin())
    .pipe(gulp.dest('dist/images'));
});
//ADD PREFIXES FOR ALL BROWSER
//UGLIFIES CSS
gulp.task('style', async function () {
  gulp.src('prod/style/main.css')
    .pipe(uglifyCss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('dist/style'));
});