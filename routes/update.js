var express = require('express');
var router = express.Router();
var assert =require('assert');
var db = require('../db');

router.get('/', function(req, res) {
//功能：查找到想要修改的数据ID
  db.user.findOne({"_id":req.query.id},function(err,doc){
    assert.equal(err,null);
    // console.log(doc);
    res.render('update', { title: '修改学生信息' , docs: doc});
  });
});

router.post('/',function(req,res){
  // console.log(req.body.id);
  db.user.update({"_id":req.body.id},{$set:req.body},function(err,docs){
    assert.equal(err,null);
  res.redirect('/show');

  });
});
module.exports = router;
