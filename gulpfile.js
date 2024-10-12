
const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const cleanCSS = require("gulp-cleaner-css");
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const svgSprite = require('gulp-svg-sprite');
const webpack = require('webpack-stream');
const del = require("del");

gulp.task("server", function() {
    browserSync({
		server: {
			baseDir : "./dist"
			},
			browser : "chrome"
  	})
});

gulp.task("styles", function (){
	return gulp.src("src/sass/**/*.+(scss|sass)")
		.pipe(sass.sync({outputStyle: "compressed"}).on("error", sass.logError))
		.pipe(rename({suffix: ".min"}))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(cleanCSS({debug: true}, (details) => {
			console.log(`${details.name}: ${details.stats.originalSize}`);
			console.log(`${details.name}: ${details.stats.minifiedSize}`);
		  }))
		
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest("dist/css"))
		.pipe(browserSync.stream());
})

gulp.task("watch", function(){
	gulp.watch(("src/sass/**/*.+(scss|sass)"), gulp.parallel("styles"));
	gulp.watch("src/*.html").on("all", gulp.parallel("html"));
	gulp.watch("src/js/**/*.js").on("all", gulp.series("scripts")); 
	gulp.watch("src/img/**/*").on("all", gulp.parallel("images"));
	gulp.watch("src/icons/**/*").on("all", gulp.parallel("icons"));
	gulp.watch("src/fonts/**/*").on("all", gulp.parallel("fonts"));
});


gulp.task("html", function() {
	return gulp.src("src/*.html")
		.pipe(gulp.dest("dist"))
		.pipe(browserSync.stream());
});

gulp.task("scripts", function() {
	return gulp.src("src/js/index.js")
		.pipe(webpack( require('./webpack.config.js') ))
		.pipe(gulp.dest("dist/js"))
		.pipe(browserSync.stream());
});

gulp.task("images", function() {
	return gulp.src("src/img/**/*", { encoding: false })
		.pipe(imagemin())
		.pipe(gulp.dest("dist/img"))
		.pipe(browserSync.stream());
});

gulp.task("icons", function() {
	return gulp.src("src/icons/**/*")
		.pipe(gulp.dest("dist/icons"))
		.pipe(browserSync.stream());
});

gulp.task("fonts", function() {
	return gulp.src("src/fonts/**/*", { encoding: false })
		.pipe(gulp.dest("dist/fonts"))
		.pipe(browserSync.stream());
});

gulp.task("sprites", function() {
	return gulp.src("src/icons/*.svg")
		.pipe(svgSprite(config = {
			mode: {
				symbol: {
					dest: ".",
					sprite: "icons/sprites/sprite.symbol.svg",
					render: {
						scss: {
							dest: "sass/libs/_sprite.scss",
						}
					}
				}
			}
		}))
		.pipe(gulp.dest("src"));	
});

gulp.task("clean", function(){
	return del(["./dist/*"]);
});


gulp.task("default", gulp.series("clean", gulp.parallel("server", "html", "styles", "scripts", "fonts", "images", "icons", "watch")));