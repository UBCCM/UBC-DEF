var gulp            = require('gulp');
var sass            = require('gulp-sass');
var rename          = require('gulp-rename');
var postcss			= require('gulp-postcss');
var cssnano         = require('cssnano');
var sourcemaps      = require('gulp-sourcemaps');
var autoprefixer    = require('autoprefixer');

var paths = {
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

gulp.task('styles', function() {
	return gulp.src(paths.src.sass + 'MAIN.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(rename(paths.dist.css))
		.pipe(gulp.dest(paths.dist.path))
});

gulp.task('prefix', function() {
	var plugins = [
		autoprefixer()
	];
	return gulp.src(paths.dist.path + paths.dist.css)
		.pipe(sourcemaps.init())
		.pipe(postcss(plugins))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.dist.path))
});

gulp.task('minify', function() {
	var plugins = [
        cssnano()
    ];
	return gulp.src(paths.dist.path + paths.dist.css)
		.pipe(postcss(plugins))
		.pipe(rename(paths.dist.minify_css))
		.pipe(gulp.dest(paths.dist.path))
});

gulp.task('watch', function(){
	gulp.watch(paths.src.sass + '**/*.scss', gulp.series('styles', 'prefix', 'minify'));
});

gulp.task('default', gulp.series('styles', 'prefix', 'minify', 'watch'));
