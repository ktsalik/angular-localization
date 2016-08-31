const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

gulp.task('build', function() {
  return gulp.src([
    'src/i18n.js',
    'src/i18n.provider.js',
    'src/i18n.directive.js',
    'src/i18n.service.js'
  ])
    .pipe(concat('angular-localization.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename('angular-localization.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() { gulp.watch('./src/*.js', ['build']) });

gulp.task('default', ['build', 'watch']);