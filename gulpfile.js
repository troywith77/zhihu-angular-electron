var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');

gulp.task('watch', ['concat', 'joinjs'], function() {
	gulp.watch('components/**/*.scss', ['concat']);
	gulp.watch('components/**/*.js', ['joinjs']);
})

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		}
	})
})

gulp.task('concat', function() {
    return gulp.src('components/**/*.scss')
        .pipe(concat('main.min.css'))
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist'))
});

gulp.task('joinjs', function() {
	return gulp.src('components/**/*.js')
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist'))
})

gulp.task('default', ['watch']);


