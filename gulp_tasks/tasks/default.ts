/// <reference path="../../typings/main.d.ts"/>

import * as gulp from 'gulp';
import * as gulputil from 'gulp-util';

gulp.task('default', () => {
  gulputil.log('**********************');
  gulputil.log('* task tools ');
  gulputil.log('* gulp test:');
  gulputil.log('* gulp tslint:');
  gulputil.log('**********************');
});