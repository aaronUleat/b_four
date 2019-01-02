const       gulp    = require("gulp");
const       pug     = require("gulp-pug");
const       sass    = require("gulp-sass");

const dir = {
    src     :   'src',
    dist    :   'dist',
    nm      :   'node_modules'
};

const opts = {
    pug: {
        pretty: true,
        locals: {

        }
    },
    sass: {
        outputStyle: 'nested',
    }
};

gulp.task('pug', () => {
    return gulp
        .src(`${dir.src}/pug/views/**/*.pug`)
        .pipe( pug( opts.pug ) )
        .pipe( gulp.dest( `${dir.dist}/views` ) );
});

gulp.task('sass', () => {
    return gulp
        .src(`${dir.src}/scss/*.scss`)
        .pipe( sass( opts.sass ) )
        .pipe( gulp.dest(`${dir.dist}/css`) );
});