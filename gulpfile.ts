/// <reference path="./typings/main.d.ts"/>

const gulpLoadPlugins = require('gulp-load-plugins');
const requireDir = require('require-dir');

gulpLoadPlugins();
requireDir('./gulp_tasks',{recurse:true});
