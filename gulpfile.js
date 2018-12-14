const { watch, series, parallel, src, dest } = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const nano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const sasslint = require('gulp-sass-lint');
const imagemin = require('gulp-imagemin');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');

function lint() {
	return src('src/sass/**/*.s+(a|c)ss')
	.pipe(sasslint({
		options: {
			formatter: 'stylish',
			'merge-default-rules': true,
		},
		files: {
			ignore: 'src/sass/vendor/*.s+(a|c)ss'
		},
		configFile: 'config/.sass-lint.yml'
	}))
	.pipe(sasslint.format())
	.pipe(sasslint.failOnError())
}

function javascript(cb) {
  // body omitted
  cb();
}

function css() {
	return src('src/sass/**/*.s+(a|c)ss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(rename({
		dirname: "dev",
		suffix: ".dev",
		extname: ".css"
	}))
	//.pipe(rename('ubcclf.css'))
	.pipe(autoprefixer({
		browsers: ['last 4 versions']
	}))
	.pipe(sourcemaps.write('./'))
	.pipe(dest('dist/css/'))
}

function tailwind() {
	return src('src/sass/**/*.s+(a|c)ss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(postcss([
		tailwindcss('config/tailwind-config.js'),
		require('autoprefixer'),
	]))
	.pipe(rename({
		extname: ".css"
	}))
	.pipe(sourcemaps.write('./'))
	.pipe(dest('dist/css/'))
}

function minify() {
	return src('dist/css/**/*.css')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 4 versions']
	}))
	.pipe(nano({
		discardComments: {
			removeAll: true
		},
		zindex: false
	}))
	.pipe(rename({
		suffix: ".min",
		extname: ".css"
	}))
	.pipe(dest('dist/min/css/'))
}

function images() {
	return src('src/img/**/*')
	.pipe(imagemin([
		imagemin.gifsicle({interlaced: true}),
		imagemin.jpegtran({progressive: true}),
		imagemin.optipng({optimizationLevel: 5}),
		imagemin.svgo({plugins: [{removeViewBox: false}]})
		], {
		verbose: true
	}))
	.pipe(dest('dist/img/'))
}

function watcher() {
	watch('src/sass/**/*.s+(a|c)ss', series(css));
	watch('src/*.js', series(javascript));
}

exports.watcher = parallel(watcher);
exports.lint = series(lint);
exports.tailwind = series(tailwind);
exports.css = series(css);
exports.images = parallel(images);
exports.minify = series(minify);
exports.build = series(javascript, images, css, tailwind, minify, lint);
exports.default = parallel(javascript, css, images);
