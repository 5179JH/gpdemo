var express = require('express');
var router = express.Router();
var user = require('../db/db')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


// 测试
router.get('/user', function(req, res, next) {
    user.find((err, ret) => {
        if (err) {
            console.log('err')
        } else {
            res.json(ret)
        }
    })
});
router.get('/list', function(req, res, next) {
    res.json({
        a: '张武杨',
        b: 21
    })
});

// 登录接口
router.post('/login', (req, res) => {
    const { id, pass } = req.body // 解构赋值
    const resData = {}

    if (id === '' || pass === '') {
        resData.code = 1
        resData.message = '用户名或密码不能为空'
        res.json(resData)
    } else {
        //查询数据库验证用户名和密码
        user.findOne({ username: id, password: pass })
            .then(userInfo => {
                if (!userInfo) {
                    resData.code = 2;
                    resData.message = '用户名或密码错误,请重新输入!';
                    res.json(resData);
                }
                //验证通过则登录
                resData.message = '登录成功';
                res.json(resData)
            })
            .catch(err => {})
            // 2.校验密码
            // 3.返回token
    }
})

// 注册接口
router.post('/register', (req, res) => {
    // 拿到前台传过来的值
    console.log("Data from submit form");
    const { id, pass, checkPass } = req.body // 解构赋值
    const resData = {}
        // console.log(id)
        // console.log(pass)
    if (id == '') {
        resData.code = 1;
        resData.message = '账号不能为空';
        res.json(resData); //使用res.json的方法返回前端数据
    }
    //密码不能为空
    if (pass == '') {
        resData.code = 2;
        resData.message = '密码不能为空';
        res.json(resData);
        return;
    }
    //两次密码不能不一样
    if (pass != checkPass) {
        resData.code = 3;
        resData.message = '两次输入的密码不一致,请重新输入!';
        res.json(resData);
        return;
    }
    // 查找数据库有没有相同的用户名 ，没有的话保存到数据库
    user.findOne({ username: id })
        .then(userInfo => {
            // console.log("查询结果: " + userInfo); //若控制台返回空表示没有查到数据
            if (userInfo) {
                //若数据库有该记录
                resData.code = 4;
                resData.message = '用户名已被注册';
                res.json(resData);
                return;
            } else {
                //用户名没有被注册则将用户保存在数据库中
                var admin = new user({
                    username: id,
                    password: pass
                });
                admin.save()
            }
        }).then(newUserInfo => {
            resData.message = '注册成功';
            res.json(resData);
        })
        .catch(err => {})
})

module.exports = router;