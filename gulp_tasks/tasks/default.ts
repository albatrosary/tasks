import * as gulp from 'gulp';
const gulputil = require('gulp-util');

gulp.task('default', () => {
  gulputil.log('**********************');
  gulputil.log('* task tools ');
  gulputil.log('* gulp test:');
  gulputil.log('* gulp tslint:');
  gulputil.log('**********************');
});