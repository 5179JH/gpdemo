var express = require('express');
var router = express.Router();
var user = require('../db/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
  res.json({
    a:'张武杨',
    b:21
  })
});

router.get('/user', function(req, res, next) {
  user.find((err,ret) => {
    if (err) {
      console.log('err')
    } else {
      res.json(ret)
    }
  })
});

module.exports = router;
