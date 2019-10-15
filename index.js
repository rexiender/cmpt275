const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5049
var app = express();
const{Pool}=require ('pg');
var pool;
pool =new Pool(
{
  connectionString: process.env.Database_URL
});


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {res.render('pages/grade.ejs')});
app.get('/hello', (req,res) => { res.render('pages/hello')});
app.get('/users',(req,res)=>{
  var getUsersQurey='SELECT *FROM userstab';
  console.log(getUsersQurey)
  pool.query(getUsersQurey,(error,result)=>{
    if (error)
      res.end(error);
    var results={'rows':result.rows}
    console.log(results);
    res.render('pages/users.ejs',results) 
  })
});
app.post('/login', (req, res) => {
  //console.log('post');
  var username = req.body.user;
  var password = req.body.pwd;
  res.send(`Hello, ${username}.  You have password ${password}`);
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
