const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  session = require('express-session'),
  config = require('./config.js'),
  app = express();

  var massiveInst = massive.connectSync({
      connectionString: config.ENDPOINT
  });
  app.set('db', massiveInst);
  var db = app.get('db');

  app.use(bodyParser.json());
  app.use(express.static('./dist'));
  app.use(cors());
  app.use(session({
    secret: config.SESSION_SECRET,
    saveUnitialized: false,
    resave: false,
  }))

  app.get('/roster', function(req, res, next){
    db.get_roster(function(err, result){
      res.send(result);
    })
  })

app.listen(3000, function(){
  console.log('Running on Port ' + 3000 + ' me lord')
})
