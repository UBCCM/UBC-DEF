const { watch, series, src } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const nano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const paths = {
	src: {
		sass:	'src/sass/',
		css: 	'src/css/'
	},
    dist: {
        css:    'dist/css/'
    }
};

/***************************************
 *
 *	Default CLF SASS compiling
 *  Run command "gulp" to start
 *
 ***************************************/

function styles() {
	return src(paths.src.sass + 'MAIN.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(rename('ubcclf.css'))
	.pipe(autoprefixer({
		browsers: ['last 6 versions']
	}))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest(paths.dist.css))
}

function minify() {
	return src(paths.dist.css + '/ubcclf.css')
	.pipe(nano({discardComments: {removeAll: true}, zindex: false}))
	.pipe(rename('ubcclf.min.css'))
	.pipe(gulp.dest(paths.dist.css))
}

function watcher() {
	watch(paths.src.sass + '**/*.scss', series(styles, minify));
}

exports.watch = series(watcher);
exports.styles = series(styles);
exports.minify = series(minify);
exports.default = series(styles, minify, watch);
