require('babel-register')({
  presets: ['es2015','react']
})
var express = require('express');
var router = express.Router();
var shopifyAPI = require('shopify-node-api');
var config = require('../config/config');
var React = require('react');
var ReactDomServer = require('react-dom/server') ;
const Component = require('../components/component');

router.get('/', function(req, res){
    var query_params = req.query;
    config.nonce = query_params.state;
    var Shopify = new shopifyAPI(config);
    console.log("get");
    Shopify.exchange_temporary_token(query_params, function(err, data){
        var html = ReactDomServer.renderToString(
            React.createElement(Component,{token: data['access_token']})
          );
        res.send(html);
    });
});

module.exports = router;