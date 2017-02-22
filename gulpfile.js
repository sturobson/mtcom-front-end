'use strict';

// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------
const gulp              = require('gulp');

// Sass and CSS Stuff
const sass              = require('gulp-sass');
const cssnano           = require('gulp-cssnano');
const autoprefixer      = require('gulp-autoprefixer');
const notify            = require('gulp-notify');
const replace           = require('gulp-replace-path');
const del               = require('del');
const rename            = require('gulp-rename');

// JS Things
const concat            = require('gulp-concat');

// Local Server Stuff
const browserSync       = require('browser-sync').create();
const reload            = browserSync.reload;

// Housekeeping

const fractal           = require('./fractal.js');
const logger            = fractal.cli.console;

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

// Sass Configarables

const autoprefixerOptions = { browsers: ['last 2 versions', '> 5%', 'Firefox ESR'] };

// -----------------------------------------------------------------------------
// Sass and CSS Tasks
// -----------------------------------------------------------------------------

gulp.task('css', function() {
  return gulp.src('./assets/scss/styles.scss')
  .pipe(sass({
    sourcemap: true,
    sourcemapPath: './patterns/',
  })).on('error', notify.onError(function (error) {return "Problem file : " + error.message;}))
  .pipe(autoprefixer(autoprefixerOptions))
  .pipe(browserSync.stream())
  .pipe(gulp.dest('./public/css'));
});

// Production build

gulp.task('sass:deploy', function () {
  return gulp.src('./assets/scss/styles.scss')
    .pipe(sass())
    .pipe(replace('../image/', '/Content/Vendor/image/'))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('./dist/css'))
    .pipe(cssnano())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:deployJP', function () {
  return gulp.src('./assets/scss/styles.scss')
    .pipe(sass())
    .pipe(replace('../image/', '/Content/Vendor/image/'))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(rename('JPstyles.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(cssnano())
    .pipe(rename('JPstyles.min.css'))
    .pipe(gulp.dest('./dist/css'));
    done();
});

// -----------------------------------------------------------------------------
// i18n Tasks
// -----------------------------------------------------------------------------

gulp.task('copyFontsUK', function(done) {
  del('./assets/scss/global/variables/_v-fonts.scss');
  gulp.src('./assets/scss/global/variables/_v-fonts--english.scss')
  .pipe(rename('_v-fonts.scss'))
  .pipe(gulp.dest('./assets/scss/global/variables/'))
  done();
});

gulp.task('copyFontsJP', function(done) {
  del('./assets/scss/global/variables/_v-fonts.scss');
  gulp.src('./assets/scss/global/variables/_v-fonts--japan.scss')
  .pipe(rename('_v-fonts.scss'))
  .pipe(gulp.dest('./assets/scss/global/variables/'))
  done();
});

// -----------------------------------------------------------------------------
// Performance Tasks
// -----------------------------------------------------------------------------

gulp.task('stats', function () {
  gulp.src('./dist/css/*.css')
    .pipe(stylestats())
    .pipe(checkFilesize({enableGzip: true}));
});

gulp.task('extract', function() {
    gulp.src('./dist/css/JPstyles.css')
     .pipe(extract({
        properties: ['font-family']
    }))
    .pipe(gulp.dest('./dist'))
});


// -----------------------------------------------------------------------------
// JavaScript Tasks
// -----------------------------------------------------------------------------

gulp.task('scripts', function() {
  return gulp.src(['./patterns/**/*.js'])
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('./public/javascript/'));
});

// -----------------------------------------------------------------------------
// Fractal Tasks
// -----------------------------------------------------------------------------

gulp.task('frctlStart', function(){
  const server = fractal.web.server({
    sync: true
  });
  server.on('error', err => logger.error(err.message));
  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`);
  });
});

gulp.task('frctlBuild', function () {
  const builder = fractal.web.builder();
  builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
  builder.on('error', err => logger.error(err.message));
  return builder.build().then(() => {
    logger.success('Fractal build completed!');
  });
});

gulp.task('watchCSS', function(done) {
  gulp.watch('./dev/assets/**/*.scss', gulp.series('css')).on('change', reload);
  done();
});

gulp.task('watchJS', function(done) {
  gulp.watch('./patterns/blocks/**/*.js', gulp.series('scripts')).on('change', reload);
  done();
});



// -----------------------------------------------------------------------------
// Default Tasks
// -----------------------------------------------------------------------------


gulp.task('watch', gulp.parallel('watchCSS', 'watchJS'));

gulp.task('dev', gulp.parallel('frctlStart', 'css', 'watch'));

// build task to deploy for monotype.com
gulp.task('deploy', gulp.series('sass:deploy', 'copyFontsJP', 'sass:deployJP', 'copyFontsUK'));
