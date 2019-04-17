var gulp            = require('gulp');
var sass            = require('gulp-sass');
var rename          = require('gulp-rename');
var nano            = require('gulp-cssnano');
var sourcemaps      = require('gulp-sourcemaps');
var autoprefixer    = require('gulp-autoprefixer');

var paths = {
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

gulp.task('minify', function() {
	return gulp.src(paths.dist.css + '/ubcclf.css')
		.pipe(nano({discardComments: {removeAll: true}, zindex: false}))
		.pipe(rename('ubcclf.min.css'))
		.pipe(gulp.dest(paths.dist.css))
});

gulp.task('watch', function(){
	gulp.watch(paths.src.sass + '**/*.scss', gulp.series('styles', 'minify'));
});

gulp.task('default', gulp.series('styles', 'minify', 'watch'));
