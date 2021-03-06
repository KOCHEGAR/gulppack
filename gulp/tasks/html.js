module.exports = function() {
    $.gulp.task("html", function() {
        return $.gulp.src("./src/**/*.html")
            .pipe($.gulp.dest("./dest/"))
            .pipe($.gp.debug({"title": "html"}))
            .on("end", $.bs.reload);
    });
}