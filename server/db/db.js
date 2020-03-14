// mongodb 原生
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/runoob";
 
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//   if (err) throw err;
//   console.log("数据库已创建!");
//   db.close();
// });


// mongoose
// 引入 mongoose 包
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 1.连接 MongoDB 数据库
mongoose.connect('mongodb://localhost:27017/BBS', {useNewUrlParser: true, useUnifiedTopology: true});

// 2.设计文档结构
var userSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String
  }
})


// 3.将文档模型发布为模型
//    mongoose.model方法就是用来将一个架构发布为 model
      // 第一个参数:传入一个大写名词单数字符串用来表示你的数据库名称
                  // mongoose会自动将大写名词的字符串生成小写复数的集合名称
                  // 例如这里的User最终会变为 users 集合名称
      // 第二个参数:架构Schema 
      // 返回值:模型构造函数
let User = mongoose.model('User', userSchema);

//  4.当我们有了模型构造函数之后，就可以使用这个构造函数对 users 集合 中的数据为所欲为了

// var admin = new User({
//   username: 'admin',
//   password: '123456',
//   email: 'admin@admin.com'
// })

// admin.save((err, ret) => {
//   if (err) {
//     console.log('保存失败')
//   } else {
//     console.log(ret)
//   }
// })
// 导出 User

module.exports = User

// 创建一个模型
// 就是在设计数据库
// MongoDB 是动态的 非常灵活 只需要在代码中设计你的数据库就了可以了
// mongoose 这个包就可以让你的设计编写过程变得十分简单

// // 实例化一个 Cat
// const Cat = mongoose.model('Cat', { name: String });

// // 持久化保存 Kitty 实例
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));