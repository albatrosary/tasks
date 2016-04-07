/// <reference path="./typings/main.d.ts"/>

import * as gulp from 'gulp';

const gulpLoadPlugins = require('gulp-load-plugins');
const requireDir = require('require-dir');

gulpLoadPlugins();
requireDir('./gulp_tasks',{recurse:true});
