var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
const helpers = require('./helpers/funcoes')
const flash = require('connect-flash');
const methodOverride = require('method-override');

var IndexRouter = require('./routes/IndexRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret:'segredos',
  resave: true,
  saveUninitialized: true
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(flash())
app.use((req, res, next) => {  
  res.locals.user = req.session.usuario || null
  res.locals.menssage = req.flash('menssage') || false
  //console.log('=======================> locals ' +  JSON.stringify(res.locals.user))
  next()
})

app.use('/', IndexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {  
  next(createError(404));
});

app.locals.helpers = helpers;
//app.locals.formatDate = formatDate;
//app.locals.diaDaSemana = diaDaSemana;

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
