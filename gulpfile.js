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
var minifyCss       = require('gulp-minify-css');

// JavaScript Stuff

var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');

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


// Housekeeping Stuff

var del             = require('del');
var git             = require('gulp-git');
var bump            = require('gulp-bump');
var filter          = require('gulp-filter');
var tag_version     = require('gulp-tag-version');




// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

// Files and Folders Configarables

var DevFolder = './dev';
var DistFolder = './dist';

// Sass Configarables
var SassInput = './scss/**/*.scss';
var SassOutput = './tmp/css';
var SassOutputBuild = './dist/styles/';
var SassOptions = { outputStyle: 'expanded' };
var autoprefixerOptions = { browsers: ['last 2 versions', '> 5%', 'Firefox ESR'] };

// JavaScript Configarables

var JSInput   = ['./scripts/**/*.js', '!./scripts/js-patterns/**/*.js', '!./scripts/vendor/**/*.js'];
var JSConcat  = './scripts/js-patterns/**/*.js';
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
    .pipe(sourcemaps.init())
    .pipe(sass(SassOptions)).on('error', notify.onError(function (error) {return "Problem file : " + error.message;}))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(browserSync.stream())
    .pipe(gulp.dest(SassOutput))
});

// Production build

gulp.task('sass:build', function () {
  return gulp
    .src(SassInput)
    .pipe(sass())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(minifyCss())
    .pipe(gulp.dest(SassOutputBuild));
});


// -----------------------------------------------------------------------------
// JavaScript things
// -----------------------------------------------------------------------------

gulp.task('concatScripts', function () {
  return gulp
  .src(JSConcat)
  .pipe(concat('patterns.js'))
  .pipe(gulp.dest('scripts/'));
})

gulp.task('concatScripts:build', function () {
  return gulp
  .src(JSConcat)
  .pipe(concat('patterns.js'))
  .pipe(gulp.dest('dist/scripts'));
})

gulp.task('scripts', function () {
  return gulp
  .src(JSInput)
  .pipe(uglify())
  .pipe(gulp.dest(JSOutput));
});

gulp.task('scripts:build', function () {
  return gulp
  .src(JSInput)
  .pipe(uglify())
  .pipe(gulp.dest('dist/scripts'));
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

// -----------------------------------------------------------------------------
// Watchers
// -----------------------------------------------------------------------------

gulp.task('watch', function() {
  gulp.watch(SassInput, ['sass'])
  gulp.watch(JSConcat, ['concatScripts'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
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

gulp.task('delete', function() {
  del([
    './dist', './tmp', './dev/designlanguage/dist', './dev/designlanguage/*.json', './dev/designlanguage/gulpfile.js', './dev/designlanguage/LICENSE', './dev/designlanguage/README.md', 'bower_components'
  ]);
});

// -----------------------------------------------------------------------------
// Git Tag Bumps
// -----------------------------------------------------------------------------

/**
 * Bumping version number and tagging the repository with it.
 * Please read http://semver.org/
 *
 * You can use the commands
 *
 *     gulp patch     # makes v0.1.0 → v0.1.1
 *     gulp feature   # makes v0.1.1 → v0.2.0
 *     gulp release   # makes v0.2.1 → v1.0.0
 *
 * To bump the version numbers accordingly after you did a patch,
 * introduced a feature or made a backwards-incompatible release.
 */

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
// Default task
// -----------------------------------------------------------------------------


// all the tasks in the world
gulp.task('default', ['sass', 'concatScripts',  'watch', 'php-serve']);
// single, one time set-up to move everything and delete things
gulp.task('tidy', ['delete']);

// used for when making things
gulp.task('dev', ['copyit', 'sass',  'watch', 'concatScripts', 'php-serve']);
// used for when ready to publish
gulp.task('build', ['del', 'copyit', 'sass:build', 'concatScripts:build', 'scripts:build']);
