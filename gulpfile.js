const { watch, series, parallel, src, dest } = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const nano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const sasslint = require('gulp-sass-lint');
const imagemin = require('gulp-imagemin');
const purgecss = require('gulp-purgecss');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const connect = require('gulp-connect');


function startserver() {
	connect.server({
		root: 'tests',
		port: 8888,
		livereload: true
	})
}

function stopserver() {
	connect.serverClose()
}

function lint() {
	return src('src/scss/**/*.s+(a|c)ss')
	.pipe(sasslint({
		options: {
			formatter: 'stylish',
			'merge-default-rules': true,
		},
		files: {
			ignore: 'src/scss/vendor/*.s+(a|c)ss'
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

function styles() {
	return src('src/scss/**/*.s+(a|c)ss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(postcss([
		tailwindcss('config/tailwind.config.js'),
		require('autoprefixer'),
	]))
	.pipe(rename({
		extname: ".css"
	}))
	.pipe(sourcemaps.write('./'))
	.pipe(dest('build/css/'))
	.pipe(dest('tests/css/'))
}

function backgroundcss() {
	return src('build/css/styles-utilities.css')
	.pipe(purgecss({
		content: ['tests/empty/index.html'],
		whitelistPatterns: [/bg/]
	}))
	.pipe(rename({
		basename: "utilities.background"
	}))
	.pipe(dest('build/css/utilities/background/'))
}

function bordercss() {
	return src('build/css/styles-utilities.css')
	.pipe(purgecss({
		content: ['tests/empty/index.html'],
		whitelistPatterns: [/border/, /rounded/]
	}))
	.pipe(rename({
		basename: "utilities.border"
	}))
	.pipe(dest('build/css/utilities/border/'))
}

function containercss() {
	return src('build/css/styles-utilities.css')
	.pipe(purgecss({
		content: ['tests/empty/index.html'],
		whitelistPatterns: [/container$/]
	}))
	.pipe(rename({
		basename: "utilities.container"
	}))
	.pipe(dest('build/css/utilities/container/'))
}

function displaycss() {
	return src('build/css/styles-utilities.css')
	.pipe(purgecss({
		content: ['tests/empty/index.html'],
		whitelistPatterns: [/block$/, /inline$/, /table$/, /table-row$/, /table-cell$/, /hidden$/, /flex$/]
	}))
	.pipe(rename({
		basename: "utilities.display"
	}))
	.pipe(dest('build/css/utilities/display/'))
}

function flexcss() {
	return src('build/css/styles-utilities.css')
	.pipe(purgecss({
		content: ['tests/empty/index.html'],
		whitelistPatterns: [/flex/, /^content/, /--content/, /^items/, /--items/, /^justify/, /--justify/, /^order/, /--order/, /^self/, /--self/]
	}))
	.pipe(rename({
		basename: "utilities.flex"
	}))
	.pipe(dest('build/css/utilities/flex/'))
}

function floatcss() {
	return src('build/css/styles-utilities.css')
	.pipe(purgecss({
		content: ['tests/empty/index.html'],
		whitelistPatterns: [/float-right$/, /float-left$/, /float-none$/,/clearfix$/]
	}))
	.pipe(rename({
		basename: "utilities.float"
	}))
	.pipe(dest('build/css/utilities/float/'))
}

function heightcss() {
	return src('build/css/styles-utilities.css')
	.pipe(purgecss({
		content: ['tests/empty/index.html'],
		whitelistPatterns: [/^h-/, /--h-/, /min-h-/, /max-h-/]
	}))
	.pipe(rename({
		basename: "utilities.height"
	}))
	.pipe(dest('build/css/utilities/height/'))
}

function interactivecss() {
	return src('build/css/styles-utilities.css')
	.pipe(purgecss({
		content: ['tests/empty/index.html'],
		whitelistPatterns: [/appearance/, /cursor/, /outline-none/, /pointer/, /resize/, /select/]
	}))
	.pipe(rename({
		basename: "utilities.interactive"
	}))
	.pipe(dest('build/css/utilities/interactive/'))
}

function ordercss() {
	return src('build/css/styles-utilities.css')
	.pipe(purgecss({
		content: ['tests/empty/index.html'],
		whitelistPatterns: [/^order/, /--order/]
	}))
	.pipe(rename({
		basename: "utilities.order"
	}))
	.pipe(dest('build/css/utilities/order/'))
}

function positioncss() {
	return src('build/css/styles-utilities.css')
	.pipe(purgecss({
		content: ['tests/empty/index.html'],
		whitelistPatterns: [/^static/, /--static/, /^fixed/, /--fixed/, /^absolute/, /--absolute/, /^relative/, /--relative/, /^sticky/, /--sticky/, /^inset/, /--inset/, /^top/, /top-0$/, /top-auto$/, /^right/, /right-0$/, /right-auto$/, /^bottom/, /bottom-0$/, /bottom-auto$/, /^left/, /left-0$/, /left-auto$/]
	}))
	.pipe(rename({
		basename: "utilities.position"
	}))
	.pipe(dest('build/css/utilities/position/'))
}

function tablecss() {
	return src('build/css/styles-utilities.css')
	.pipe(purgecss({
		content: ['tests/empty/index.html'],
		whitelistPatterns: [/^table/, /--table/]
	}))
	.pipe(rename({
		basename: "utilities.table"
	}))
	.pipe(dest('build/css/utilities/table/'))
}

function textcss() {
	return src('build/css/styles-utilities.css')
	.pipe(purgecss({
		content: ['tests/empty/index.html'],
		whitelistPatterns: [/text/, /tracking/, /leading/, /font/, /list-reset/, /italic/, /roman/, /uppercase/, /lowercase/, /capitalize/, /normal-case/, /underline/, /line-through/, /no-underline/, /antialiased/, /subpixel-antialiased/]
	}))
	.pipe(rename({
		basename: "utilities.text"
	}))
	.pipe(dest('build/css/utilities/text/'))
}

function widthcss() {
	return src('build/css/styles-utilities.css')
	.pipe(purgecss({
		content: ['tests/empty/index.html'],
		whitelistPatterns: [/^w-/, /--w-/, /min-w-/, /max-w-/]
	}))
	.pipe(rename({
		basename: "utilities.width"
	}))
	.pipe(dest('build/css/utilities/width/'))
}

function minify() {
	return src('build/css/**/*.css')
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
	.pipe(dest('dist/css/'))
	.pipe(dest('tests/css/'))
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
	.pipe(dest('build/img/'))
	.pipe(dest('dist/img/'))
	.pipe(dest('tests/img/'))
}

function watcher() {
	watch('src/scss/**/*.s+(a|c)ss', series(styles));
	watch('src/*.js', series(javascript));
}

exports.serverstart = parallel(startserver);
exports.serverstop = parallel(stopserver);
exports.watch = parallel(watcher);
exports.utilities = parallel(backgroundcss, bordercss, containercss, displaycss, flexcss, floatcss, heightcss, interactivecss, ordercss, positioncss, tablecss, textcss, widthcss);
exports.lint = series(lint);
exports.styles = series(styles);
exports.images = parallel(images);
exports.minify = series(minify);
exports.build = series(javascript, images, styles, minify);
exports.deploy = series(javascript, images, styles, minify, lint);
exports.default = parallel(javascript, styles, images);
