var express = require('express');//requires Express
var router = express.Router();//creates router object
var shopifyAPI = require('shopify-node-api');//SHOPIFY
var config = require('../config/config');
var noncerequired = require('nonce')();
var noncestring = noncerequired();

router.get('/', function(req, res, next) {
  var Shopify = new shopifyAPI({
    shop: config.shop,
    shopify_api_key: config.shopify_api_key,
    shopify_shared_secret: config.shopify_shared_secret,
    shopify_scope: config.shopify_scope,
    redirect_uri: config.redirect_uri,
    nonce: noncestring 
  });
  
  var auth_url = Shopify.buildAuthURL();

  console.log('auth_url',auth_url);

  res.redirect(auth_url);
});

module.exports = router;