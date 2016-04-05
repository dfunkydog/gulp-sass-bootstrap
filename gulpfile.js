var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');

var paths = {
  scripts: ['js/**/*.js'],
  css: 'stylsheets/**/*.scss'
};

gulp.task('default', ['stylusBuild']);

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

//run stylus
gulp.task('sass', function(){
    return gulp.src('stylesheets/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./'));
});

gulp.task('stylusBuild', function(){
    return gulp.src('stylesheets/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./'));
});





gulp.task('watch', function(){
    gulp.watch('stylesheets/**/*.scss', ['sass']);
});

