var express = require('express');
var router = express.Router();
//数据库
var db = require('../db');
var assert = require('assert');
var socket = require('../socket');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('info', { title: '学生输入信息' });
});

router.post('/',function(req,res){

console.log(req.body);
var user = new db.user(req.body);
user.save(function(err,resulte){
  assert.equal(null,err);
    socket.io.emit('msg', resulte);
    res.redirect('/show');
  });
});
module.exports = router;
