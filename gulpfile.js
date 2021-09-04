'use strict';

const  {task, src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concatCss = require('gulp-concat-css');

sass.compiler = require('node-sass');

exports.sass = function () {
   return src(['./src/styles/main.scss'])
     .pipe(sass().on('error', sass.logError))
     .pipe(concatCss("main.css"))
     .pipe(cssmin())
     .pipe(rename({suffix: '.min'}))
     .pipe(dest('./style'));
 };

 exports.sassWatch = function () {
   watch('./src/styles/*.scss', series('sass'));
 }

