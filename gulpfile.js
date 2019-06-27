const { watch, series, src, dest } = require('gulp');
const sass				= require('gulp-sass');
const rename			= require('gulp-rename');
const postcss			= require('gulp-postcss');
const cssnano			= require('cssnano');
const sourcemaps		= require('gulp-sourcemaps');
const autoprefixer		= require('autoprefixer');

const paths = {
	src: {
		sass:	'src/sass/',
		css: 	'src/css/'
	},
    dist: {
		path: 	'dist/css/',
		css:    'ubcclf.css',
		minify_css: 'ubcclf.min.css'
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
		.pipe(sass().on('error', sass.logError))
		.pipe(rename(paths.dist.css))
		.pipe(dest(paths.dist.path))
};

function prefix() {
	var plugins = [
		autoprefixer()
	];
	return src(paths.dist.path + paths.dist.css)
		.pipe(sourcemaps.init())
		.pipe(postcss(plugins))
		.pipe(sourcemaps.write('./'))
		.pipe(dest(paths.dist.path))
};

function minify() {
	var plugins = [
        cssnano()
    ];
	return src(paths.dist.path + paths.dist.css)
		.pipe(postcss(plugins))
		.pipe(rename(paths.dist.minify_css))
		.pipe(dest(paths.dist.path))
};

function watcher() {
	watch(paths.src.sass + '**/*.scss', series(styles, prefix, minify));
};

exports.watch = series(watcher);
exports.styles = series(styles);
exports.prefix = series(prefix);
exports.minify = series(minify);
exports.default = series(styles, prefix, minify, watcher);
