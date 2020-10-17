/* npm i --save-dev gulp */
/* npm i --save-dev gulp-concat */
/* npm i --save-dev gulp-clean-css */

const GULP = require('gulp');
const CONCAT = require('gulp-concat');
const CLEAN_CSS = require('gulp-clean-css');

GULP.task('build', _ => GULP.src('docs/style/*').pipe(CONCAT('style.min.css'))
  .pipe(CLEAN_CSS()).pipe(GULP.dest('docs/dist')));
