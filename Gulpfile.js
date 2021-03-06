var gulp            = require('gulp');
var minifyCss       = require('gulp-minify-css');
var notify          = require("gulp-notify") ;
var browserify      = require('browserify');
var babelify        = require('babelify');
var source          = require('vinyl-source-stream');
var sass            = require('gulp-sass') ;
var browserSync     = require('browser-sync').create();
var cache           = require('gulp-cache');
var concat          = require('gulp-concat');
var streamify       = require('gulp-streamify');
var uglify          = require('gulp-uglify');
var reload          = browserSync.reload;

var config          = require('./gulp-config');

gulp.task('css', function() { 
  return gulp.src(config.src.sass)
      .pipe(sass({
        includePaths: [
          config.bowerDir + '/bootstrap-sass/assets/stylesheets'
        ]
      }))
      .pipe(minifyCss())
       .pipe(gulp.dest(config.dest.sass)); 
});

gulp.task('scripts', function() {
  return gulp.src(config.src.scripts)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.dest.scripts));
});

gulp.task('react', function() {
  return browserify({entries: config.src.reactSrc, extensions: ['.jsx'], debug: true})
      .transform('babelify', {presets: ['es2015', 'react']})
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(config.dest.scripts));
});

gulp.task('build', ['react','scripts','css']);

gulp.task('serve', ['build'], function() {
    browserSync.init({
        proxy: 'localhost:3000'
    });

    // Start a watch for rebuilds
    gulp.watch(config.watch.sass, ['css', reload]);
    gulp.watch(config.watch.scripts, ['scripts', reload]);
    gulp.watch(config.watch.react, ['react', reload]);
    gulp.watch(config.watch.pages, ['', reload]);
});

gulp.task('default', ['serve']);
