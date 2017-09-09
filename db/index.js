var mongoose = require('mongoose');
var url = 'mongodb://127.0.0.1:27017/test';
mongoose.connect(url);

var db = mongoose.connection;
db.on('error',function(){
  console.log(" error");
});

db.once('open',function(){
  console.log("ok!!!!!!");
});

var Schema = mongoose.Schema;
var userSchema = new Schema({
  user:String,
  Email:String,
  QQ:String,//Number
  Home:String,
  Age:String,//Num
  // date:{type:Date,}
});
var User = mongoose.model('stuinfo',userSchema);

module.exports.user = User;
