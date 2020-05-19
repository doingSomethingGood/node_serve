var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

require('./config/mysqlConfig')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//配置项目启动的时候加载的静态文件位置
// app.use(express.static(path.join(__dirname, 'test')));
app.use(express.static(path.join(__dirname, 'testDemo')));


//配置从vue中打包过来的前端项目
// const fs = require('fs')
// app.get('*', function (req, res) {
//   const html = fs.readFileSync(path.resolve(__dirname, './test/index.html'), 'utf-8')
//   res.send(html)
// })


var meuuRouter = require('./routes/menu')
app.use('/menu', meuuRouter)





// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
