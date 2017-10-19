'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var nano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sasslint = require('gulp-sass-lint');
var sassdoc = require('sassdoc');

var paths = {
    src: {
        sass: 'src/sass/',
        css: 'src/css/'
    },
    dist: {
        css: 'dist/css/'
    }
};

/***************************************
 * 
 *	Default CLF SASS compiling
 *  Run command "gulp" to start
 *
 ***************************************/

// full list of rules at: https://github.com/sasstools/sass-lint/tree/develop/docs/rules
gulp.task('lint', function() {
    return gulp.src(paths.src.sass + '**/*.s+(a|c)ss')
        .pipe(sasslint({
            options: {
                formatter: 'stylish',
                'merge-default-rules': true,
            },
            files: {ignore: paths.src.sass + 'vendor/*.scss'},
            configFile: 'config/.sass-lint.yml'
        }))
        .pipe(sasslint.format())
        .pipe(sasslint.failOnError())
});

gulp.task('sassdoc', function () {
    return gulp.src(paths.src.sass + '**/*.scss')
    .pipe(sassdoc());
});

gulp.task('styles', function() {
    return gulp.src(paths.src.sass + 'MAIN.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('ubcclf.css'))
        .pipe(autoprefixer({
            browsers: ['last 6 versions']
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.dist.css))
});

gulp.task('minify', ['styles'], function() {
    return gulp.src(paths.dist.css + '/ubcclf.css')
        .pipe(nano({ discardComments: { removeAll: true }, zindex: false }))
        .pipe(rename('ubcclf.min.css'))
        .pipe(gulp.dest(paths.dist.css))
});

gulp.task('watch', ['styles', 'minify'], function() {
    gulp.watch(paths.src.sass + '/**/*.scss', ['styles', 'minify']);
});

gulp.task('default', ['styles', 'minify', 'watch'], function() {});
