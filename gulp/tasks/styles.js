var gulp = require('gulp'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
postcss = require('gulp-postcss'),
mixins = require('postcss-mixins');
cssimport = require('postcss-import');


gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssimport, mixins, cssvars, nested, autoprefixer]))
        .on('error', function(errorinfo){
            console.log(errorinfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});
