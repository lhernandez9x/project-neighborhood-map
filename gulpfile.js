//gulpfile

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');
var uglyfly = require('gulp-uglyfly');
var rename = require('gulp-rename');

gulp.task('default', function() {
    'use strict';
    gulp.watch('src/css/*.css', ['compress'])
    gulp.watch('src/js/*.js', ['compress'])
});

gulp.task('images', function(){
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
    gulp.src('src/images/markers/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/markers'));
});

gulp.task('compress', function(){
    
    //CSS Minify
    gulp.src('src/css/*.css')
    .pipe(cleanCSS({keepSpecialComments: '*'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css/'))
    
    // JS Minify
    gulp.src('src/js/*.js')
    .pipe(uglyfly({preserveComments: 'all', mangle: false}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js/'))
});