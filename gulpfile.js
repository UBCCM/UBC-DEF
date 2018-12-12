const { watch, series, parallel, src, dest } = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const nano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const sasslint = require('gulp-sass-lint');

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

function minify() {
	return src('src/sass/**/*.s+(a|c)ss')
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
		browsers: ['last 6 versions']
	}))
	.pipe(sourcemaps.write('./'))
	.pipe(dest('dist/css/'))
}

watch('src/sass/**/*.s+(a|c)ss', series(css));
//watch('src/*.js', series(javascript));
exports.lint = series(lint);
exports.css = series(css);
exports.minify = series(minify);
exports.build = series(javascript, css, minify, lint);
exports.default = parallel(javascript, css);
