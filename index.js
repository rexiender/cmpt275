const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8019
var app = express();
/*CAN NOT CONNECT HEROKU POSTGRES

//var conString="postgres://apple:1234@localhost/tokimon";
const { Pool } = require('pg'); 
const pool = new Pool({ ß
  connectionString: process.env.Database_URL,
  ssl: true 
 });
*/
 //connect to local postgres instead
var conString="postgres://apple:1234@localhost/tokimon";
var Pool=require('pg');

var pool= new Pool.Client(conString); 
pool.connect();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {res.render('pages/index')});
//app.get('/tokimon', (req,res) => { res.render('pages/tokimon')});
app.get('/tokimon',(req,res)=>{
  var getUsersQurey='SELECT * FROM tokimon';
  console.log(getUsersQurey)  
  pool.query(getUsersQurey,(error,result)=>{
    if (error)
      res.end(error);
    var results={'rows':result.rows}
    
    console.log(results);
    res.render('pages/tokimon.ejs',results) 
});

app.post('/DisplayAllTokimon', (req,res) => {
  var getUsersQurey='SELECT * FROM tokimon';
  pool.query(getUsersQurey,(error,result)=>{
    if (error)
      res.end(error);
    var results={'rows':result.rows}
    var count={'tokimon':result.rowCount}

    var users = JSON.parse(results);
    var filtered = _.where(name, {name: "a"});
    console.log(count);
    var i;
    for (i = 0; i < count; i++) { 
      res.send(results[i].name);
      
    }
      
    });
  });
});



app.post('/AddTokimon', (req, res) => {
  console.log('Addtokimon~');
  var name = req.body.Name;
  var weight = req.body.Weight;
  var height= req.body.Height;
  var fly= req.body.Fly;
  var fight= req.body.Fight;
  var fire= req.body.Fire;
  var water= req.body.Water;
  var electric= req.body.Electric;
  var frozen= req.body.Frozen;
  var name_of_trainer= req.body.Trainer;
  var total=(fly-0)+(fight-0)+(fire-0)+(water-0)+(electric-0)+(frozen-0);
  var InsertQuery='INSERT INTO tokimon (name,weight,height,fly,fight,fire,water,electric,frozen,total,name_of_trainer) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)'
  pool.query(InsertQuery,[name,weight,height,fly,fight,fire,water,electric,frozen,total,name_of_trainer],(err,res)=>{
    if (err)
      res.end(error);
  });
  res.send(`Congradulation! Your tokimon ${name} has total ability: ${total}`);
});


app.post('/DeleteTokimon', (req, res) => {
  console.log('Delete tokimon~');
  var item=req.body.ToDelete;
  console.log(item);
  var deletequery='DELETE FROM tokimon WHERE name=$1'
  pool.query(deletequery,[item]);

  res.send(`Delete ${req.body.ToDelete} succefullly.`);

});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
