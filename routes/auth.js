var express = require('express');
var router = express.Router();
var shopifyAPI = require('shopify-node-api');
var config = require('../config/config');

router.get('/', function(req, res){
    
    var query_params = req.query;
    config.nonce = query_params.state;
    
    var Shopify = new shopifyAPI(config);
    
    Shopify.exchange_temporary_token(query_params, function(err, data){
        shopify_hidden_at=data['access_token'];
    });
});

module.exports = router;