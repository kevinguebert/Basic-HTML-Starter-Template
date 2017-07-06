var gulp = require('gulp');
var bs = require('browser-sync').create();

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("./app/*.html").on('change', bs.reload);
    gulp.watch("./app/js/*.js").on('change', bs.reload);
    gulp.watch("./app/css/*.css").on('change', bs.reload);
});