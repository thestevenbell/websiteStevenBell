var gulp = require('gulp'),
    sass = require('gulp-sass'),
    neat = require('node-neat').includePaths;
    jade = require('gulp-jade');
    livereload = require('gulp-livereload');
    $ = require('gulp-load-plugins')();
    browserSync = require('browser-sync').create();

var paths = {
    scss: './stylesheets/*.scss'
};

//https://www.browsersync.io/docs/gulp/
// browser-sync set up
gulp.task('browser-sync', function () {
   var files = [
      '/*.html',
      'stylesheets/css/*.css',
      '/img/*.png',
      '/img/*.jpeg',
      '/img/*.jpg',
      '/js/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './'
      }
   });
});

gulp.task('serve', ['styles', 'jade'], function() {

//    browserSync.init({
//        server: "./"
//    });
  var files = [
      '/*.html',
      'stylesheets/css/*.css',
      '/img/*.png',
      '/img/*.jpeg',
      '/img/*.jpg',
      '/js/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './'
      }
   });


    gulp.watch("stylesheets/*.scss", ['styles']);
    gulp.watch("/*.jade", ['jade']);
    gulp.watch("/*.html").on('change', browserSync.reload);
});


// create TASK to watch for changes in css files
gulp.task('styles', function () {
    return gulp.src(paths.scss)
        .pipe(sass({
            includePaths: ['styles'].concat(neat),
            errLogToConsole: true
        }))
        .pipe(gulp.dest('./stylesheets/css'))
        .pipe(livereload());
});

// create a TASK to compile Jade to HTML using gulp-jade
gulp.task('jade', function() {
   return gulp.src('./*.jade')
   .pipe($.jade({
      pretty: true,
      doctype: 'html'
    }))
   .on('error', $.util.log)
   .pipe(gulp.dest('./'));
});

// create a TASK to WATCH for changes in your files
// this will "watch" for any changes in your files and rerun gulp if necessary
gulp.task('watch', function() {
   //livereload.listen();
   gulp.watch(['./*.jade'], ['jade']); //first arg is the dir to watch, 2nd is the task
   gulp.watch(['./stylesheets/*.scss'], ['styles']);
});

gulp.task('default',function(){
    gulp.start('styles')
    gulp.start('jade')
    gulp.start('watch')
});

// TASK default executed in bash with gulp command
gulp.task('default', ['jade', 'styles', 'watch', 'serve'], function() {});
gulp.task('browsersync', ['serve']);
