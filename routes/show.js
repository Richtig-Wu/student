var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');
var socket = require('../socket');

router.get('/', function(req , res){
  db.user.find({},function(err,doc){
    assert.equal(err,null);
        res.render('show',{title:'学生显示信息',infos:doc});
  });
});


router.post('/',function(req,res){
  //删除
  db.user.deleteOne({"_id": req.body.id},function(err,doc){
    console.log(req.body);
  // res.render('show',{dele:'删除'});
  assert.equal(err,null);
// socket.io.emit('msg', resulte);
  res.redirect('/show');
  });

});

module.exports = router;
