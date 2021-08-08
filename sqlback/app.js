var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var banksRouter = require('./routes/banks');
var adminsRouter = require('./routes/admins');

const bodyParser = require('body-parser');
 

/*const spawn = require('child_process').spawn;
const process = spawn('python',['./scraping/main.py']);
 process.stdout.on('data',data =>{
     console.log(data.toString());
});
*/

/*app.get('/getPyhtonData',async(req,res) => {
    
  process.stdout.on('data',data =>{
    console.log(data.toString());
    return res.send(data.toString());
    
   });
    
    //console.log( res.send(data));
  })
*/
 
  


// Database
const db = require("./models");
db.sequelize.sync()

// Test DB





var app = express();

/*// add mongoose 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/minyar',{ useNewUrlParser: true,useUnifiedTopology: true});*/

// add cors 
var cors = require('cors');
const router = require('./routes/users');
app.use(cors({
  origin:'http://localhost:4200'
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/banks',banksRouter);
app.use('/admins',adminsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
  

});


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
console.log("hello");


/*app.use((req,res,next)=>{
  console.log(req.methode,req.path)
  next()
});
*/
