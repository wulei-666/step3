var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// 首页
router.get('/index', function(req, res, next) {
  res.render('hwgou_index', { title: 'Express' });
});

module.exports = router;
