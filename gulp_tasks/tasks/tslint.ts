import * as gulp from 'gulp';
import tslint from "gulp-tslint";
 
gulp.task('tslint', () =>
  gulp.src('gulpfile.ts')
    .pipe(tslint())
    .pipe(tslint.report('verbose'))
);
