require('babel-register')({
  presets: ['es2015','react']
})

var express = require('express');
var router = express.Router();
var React = require('react');

var ReactDomServer = require('react-dom/server') ;
const Component = require('../component');


/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  var html = ReactDomServer.renderToString(
    React.createElement(Component,{obj:'txt'})
  );
  res.send(html);
});

module.exports = router;


