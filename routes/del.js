var express = require('express');
var router = express.Router();
var db = require('../db');
var assert = require('assert');
var socket = require('../socket');

router.get('/',function(req,res){

  res.render('info',{dele:'删除'});
});


router.post('/',function(req,res){
  db.user.deleteOne(_id,function(err,doc){
  assert.equal(err,null);
  res.render('show',{dele:'删除'});
  });
});
module.exports = router;
