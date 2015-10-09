var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Code Test' });
});

function randIndex() {
  return Math.floor(Math.random() * 3);
}

router.get('/newauth', function(req, res, next){
  var authors = ['J.S. Cript', 'Py DefClass', 'Ruby vonRails'];
  res.json(authors[randIndex()]);
});

router.get('/newtitle', function(req, res, next){
  var titles = ['Get a Backbone.js', 'Node for Dummies', 'Developing Underwater'];
  res.json(titles[randIndex()]);
});

router.get('/newyear', function(req, res, next) {
  var years = [2010, 2011, 2012];
  res.json(years[randIndex()]);
});

module.exports = router;
