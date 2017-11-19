const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//get a list of ninjas from the db
router.get('/ninjas', function(req, res, next){
  Ninja.find({}).then(function(ninja){
    res.send(ninja);
  });

});

//add a list of ninjas to the db
router.post('/ninjas', function(req, res ,next){

  Ninja.create(req.body).then(function(ninja){
    res.send(ninja);
  }).catch(next);

});

router.post('/alchemists', function(req, res ,next){

  Ninja.create(req.body).then(function(alchemist){
    res.send(alchemist);
  }).catch(next);

});

//update a ninja in the db
router.put('/ninjas/:id', function(req, res, next){

  Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(ninja){
    Ninja.findOne({_id:req.params.id}).then(function(ninja){
      res.send(ninja);
    });

  });

});

router.delete('/ninjas/:id', function(req, res, next){

  Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
    res.send(ninja);
  });

});


module.exports = router;
