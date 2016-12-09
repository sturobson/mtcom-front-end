'use strict';

// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------

var gulp            = require('gulp');

// Sass and CSS Stuff

var sass            = require('gulp-sass');
var sourcemaps      = require('gulp-sourcemaps');
var autoprefixer    = require('gulp-autoprefixer');
var notify          = require("gulp-notify");
var cssnano         = require('gulp-cssnano');

// Image Stuff

var imagemin        = require('gulp-imagemin');

// Local Server Stuff

var browserSync     = require('browser-sync').create();
var php             = require('gulp-connect-php');
var httpProxy       = require('http-proxy');
var replace         = require('gulp-replace-path');
var path            = require('path');

var proxy           = httpProxy.createProxyServer({});
var reload          = browserSync.reload;
var rename          = require('gulp-rename');

// Housekeeping Stuff

var del             = require('del');
var git             = require('gulp-git');
var bump            = require('gulp-bump');
var filter          = require('gulp-filter');
var tag_version     = require('gulp-tag-version');
var stylestats      = require('gulp-stylestats');
var checkFilesize   = require("gulp-check-filesize");

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

// Files and Folders Configarables

var DevFolder = './dev';
var DistFolder = './dist';

// Sass Configarables
var SassInput = './scss/**/*.scss';
var SassOutput = './tmp/css';
var SassOutputBuild = './dist/css/';
var SassOptions = { outputStyle: 'expanded' };
var autoprefixerOptions = { browsers: ['last 2 versions', '> 5%', 'Firefox ESR'] };
var CSSUrl = 'http://www.monotype.com/Content/Vendor/image/'

// JavaScript Configarables

var JSInput   = ['./scripts/monotype.js'];
var JSConcat  = ['./javascript/block/**/*.js', './javascript/global/**/*.js'];
var JSOutput  = './tmp/scripts/';

// Images Configurables

var ImagesFolder = './image';

// BrowserSync Files to watch changes for

var watchFiles = ['tmp/**/*.php', 'css/**/*.css', 'tmp/**/*.css', 'tmp/**/*.js'];

// -----------------------------------------------------------------------------
// Sass compilation
// -----------------------------------------------------------------------------

gulp.task('sass', function () {
  return gulp
    .src(SassInput)
    .pipe(sass(SassOptions)).on('error', notify.onError(function (error) {return "Problem file : " + error.message;}))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(browserSync.stream())
    .pipe(gulp.dest(SassOutput))
    .pipe(gulp.dest('./scss/'));
});

// Production build

gulp.task('sass:build', function () {
  return gulp
    .src(SassInput)
    .pipe(sass())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(cssnano())
    .pipe(gulp.dest('./scss/'));
});

gulp.task('sass:deploy', function () {
  return gulp
    .src(SassInput)
    .pipe(sass())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(replace('../images/', '../../'))
    .pipe(cssnano())
    .pipe(gulp.dest(SassOutputBuild));
});

gulp.task('urls', function(){
  gulp.src(['./dist/css/style.css'])
    .pipe(replace('../images/', 'http://www.monotype.com/Content/Vendor/image/'))
    .pipe(gulp.dest('./dist/css/'));
});

// -----------------------------------------------------------------------------
// Image Optimisation
// -----------------------------------------------------------------------------

gulp.task('images', function () {
  return gulp.src('dev/images/*')
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('dist/image'));
});

// -----------------------------------------------------------------------------
// Local Server and BrowserSync
// -----------------------------------------------------------------------------

gulp.task('php-serve', function () {
  php.server({
    port: 9001,
    open: false
  });

  browserSync.init({
    notify: false,
    port  : 9000,
    files : watchFiles,
    server: {
      baseDir   : ['tmp'],
      routes    : {
        '/bower_components': 'bower_components'
      },
      middleware: function (req, res, next) {
        var url = req.url;
        if (!url.match(/^\/(css|bower_components)\//)) {
          proxy.web(req, res, { target: 'http://127.0.0.1:9001' });
        } else {
          next();
        }
      }
    }
  });
});

gulp.task('copyit', function() {
  gulp.src('css/**/*')
  .pipe(gulp.dest('tmp/css'))
});


gulp.task('copyBuild', function() {
  gulp.src('doc/**/*')
  .pipe(gulp.dest('dist/doc'));
  gulp.src(['**/*.php', '!node_modules/**/*.php'])
  .pipe(gulp.dest('dist/'));
  gulp.src('images/**/*')
  .pipe(gulp.dest('dist/images'));
  gulp.src('javascript/**/*')
  .pipe(gulp.dest('dist/javascript'));
  gulp.src('markup/**/*')
  .pipe(gulp.dest('dist/markup'));
  gulp.src('sg-assets/**/*')
  .pipe(gulp.dest('dist/sg-assets'));
  gulp.src('data.json')
  .pipe(gulp.dest('dist/'));
});


gulp.task('copyFontsUK', function() {
  del('./scss/global/variables/_v-fonts.scss');
  gulp.src('./scss/global/variables/_v-fonts--english.scss')
  .pipe(rename('_v-fonts.scss'))
  .pipe(gulp.dest('./scss/global/variables/'))
});

gulp.task('copyFontsJP', function() {
  del('./scss/global/variables/_v-fonts.scss');
  gulp.src('./scss/global/variables/_v-fonts--japan.scss')
  .pipe(rename('_v-fonts.scss'))
  .pipe(gulp.dest('./scss/global/variables/'))
});

// -----------------------------------------------------------------------------
// Watchers
// -----------------------------------------------------------------------------

gulp.task('watch', function() {
  gulp.watch(SassInput, ['sass'])
  gulp.watch(JSConcat, ['concatScripts']);
  gulp.watch([
    '**/*.html',
    '*.php',
    'css/*.css',
    'scss/*.scss',
    'images/**/*',
    'scripts/**/*'
  ]).on('change', reload);
  gulp.watch(['tmp/css/**/*.css']);
});

// -----------------------------------------------------------------------------
// Delete Everything in Dist
// -----------------------------------------------------------------------------

gulp.task('del', function() {
  del([
    './dist', './tmp'
  ]);
});

// -----------------------------------------------------------------------------
// Git Tag Bumps
// -----------------------------------------------------------------------------

function inc(importance) {
    // get all the files to bump version in
    return gulp.src(['./package.json', './bower.json'])
        // bump the version number in those files
        .pipe(bump({type: importance}))
        // save it back to filesystem
        .pipe(gulp.dest('./'))
        // commit the changed version number
        .pipe(git.commit('bumps package version'))

        // read only one file to get the version number
        .pipe(filter('package.json'))
        // **tag it in the repository**
        .pipe(tag_version());
}

gulp.task('patch', function() { return inc('patch'); })
gulp.task('feature', function() { return inc('minor'); })
gulp.task('release', function() { return inc('major'); })

// -----------------------------------------------------------------------------
// Performance Tasks
// -----------------------------------------------------------------------------

gulp.task('stats', function () {
  gulp.src('./tmp/**/*.css')
    .pipe(stylestats())
    .pipe(checkFilesize({enableGzip: true}));
});

// -----------------------------------------------------------------------------
// Default task
// -----------------------------------------------------------------------------

// all the tasks in the world
gulp.task('default', ['sass', 'watch', 'php-serve']);
gulp.task('setup:english', ['copyFontsUK']);
gulp.task('setup:japan', ['copyFontsJP']);

// used for when making things
gulp.task('dev', ['copyit', 'sass',  'watch', 'php-serve']);
// used for when ready to publish
gulp.task('build', ['sass:build', 'copyBuild']);
// build task to deploy for monotype.com
gulp.task('deploy', ['sass:deploy', 'copyBuild']);
