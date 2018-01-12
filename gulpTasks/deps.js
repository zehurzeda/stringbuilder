const gulp = require('gulp')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts'])

gulp.task('deps.js', () => {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/fastclick/lib/fastclick.js',
    'node_modules/jquery-sparkline/jquery.sparkline.min.js',
    'node_modules/jvectormap/jquery-jvectormap.min.js',
    'node_modules/admin-lte/plugins/jQueryUi/jquery-ui.min.js',
    'node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js',
    'node_modules/admin-lte/dist/js/adminlte.min.js',
    'node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
  ])
  .pipe(uglify())
  .pipe(concat('deps.min.js'))
  .pipe(gulp.dest('public/assets/js'))
})

gulp.task('deps.css', () => {
  return gulp.src([
    'node_modules/font-awesome/css/font-awesome.min.css',
    'node_modules/ionicons/dist/css/ionicons.min.css',
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/admin-lte/dist/css/AdminLTE.min.css',
    'node_modules/admin-lte/dist/css/skins/_all-skins.min.css',
    'node_modules/jvectormap/jquery-jvectormap.css',
  ])
  .pipe(uglifycss({ "uglyComments": true }))
  .pipe(concat('deps.min.css'))
  .pipe(gulp.dest('public/assets/css'))
})

gulp.task('deps.fonts', () => {
  return gulp.src([
    'node_modules/font-awesome/fonts/*.*',
    'node_modules/admin-lte/bootstrap/fonts/*.*'
  ])
  .pipe(gulp.dest('public/assets/fonts'))
})
