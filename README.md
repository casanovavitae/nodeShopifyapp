# NodeJs React App for Shopify.

#### Polaris is a React component library designed to help developers create the best experience for merchants who use Shopify. Visit the [Polaris style guide](https://polaris.shopify.com) to learn more.

shopify-node-api [![Build Status](https://travis-ci.org/christophergregory/shopify-node-api.svg?branch=master)](https://travis-ci.org/christophergregory/shopify-node-api)
================
OAuth2 Module for Shopify API using node and react
## Install
```
npm install -S shopify-node-api
```

## Configure Public App

Public apps are apps intended to appear in the [Shopify App Store](https://apps.shopify.com?ref=grenadeapps) and require OAuth2 to access shop data.

```js
var shopifyAPI = require('shopify-node-api');


var Shopify = new shopifyAPI({
  shop: 'MYSHOP', // MYSHOP.myshopify.com
  shopify_api_key: '', // Your API key
  shopify_shared_secret: '', // Your Shared Secret
  shopify_scope: 'write_products',
  redirect_uri: 'http://localhost:3000/finish_auth',
  nonce: '' // you must provide a randomly selected value unique for each authorization request
});

```


## Configure Private App

Private apps are created for a single shop and do not appear in the shopify app store. [More info here.](https://docs.shopify.com/api/guides/introduction/creating-a-private-app)

```js
var shopifyAPI = require('shopify-node-api');


var Shopify = new shopifyAPI({
  shop: 'MYSHOP', // MYSHOP.myshopify.com
  shopify_api_key: '', // Your API key
  access_token: '' // Your API password
});
```

Note: If you are building a [private Shopify app](https://docs.shopify.com/api/authentication/creating-a-private-app?ref=grenadeapps), then you don't need to go through the OAuth authentication process. You can skip ahead to the Making Requests section.



## Making requests

This module supports GET, POST, PUT and DELETE rest verbs. Each request will return any errors, the data in JSON formation and any headers returned by the request.

An important header to take note of is **'http_x_shopify_shop_api_call_limit'**. This will let you know if you are getting close to reaching [Shopify's API call limit](http://docs.shopify.com/api/tutorials/learning-to-respect-the-api-call-limit).

### API limits

```js
function callback(err, data, headers) {
  var api_limit = headers['http_x_shopify_shop_api_call_limit'];
  console.log( api_limit ); // "1/40"
}
```

### GET

```js
Shopify.get('/admin/products.json', query_data, function(err, data, headers){
  console.log(data); // Data contains product json information
  console.log(headers); // Headers returned from request
});
```
The argument `query_data` is optional. If included it will be converted to a querystring and appended to the uri.

### POST

```js
var post_data = {
  "product": {
    "title": "Burton Custom Freestlye 151",
    "body_html": "<strong>Good snowboard!</strong>",
    "vendor": "Burton",
    "product_type": "Snowboard",
    "variants": [
      {
        "option1": "First",
        "price": "10.00",
        "sku": 123
      },
      {
        "option1": "Second",
        "price": "20.00",
        "sku": "123"
      }
    ]
  }
}

Shopify.post('/admin/products.json', post_data, function(err, data, headers){
  console.log(data);
});
```

### PUT

```js
var put_data = {
  "product": {
    "body_html": "<strong>Updated!</strong>"
  }
}

Shopify.put('/admin/products/1234567.json', put_data, function(err, data, headers){
  console.log(data);
});
```

### DELETE

```js
Shopify.delete('/admin/products/1234567.json', function(err, data, headers){
  console.log(data);
});
```


### API Call Limit Options

By default, shopify-node-api will automatically wait if you approach Shopify's API call limit. The default setting for backoff delay time is 1 second if you reach 35 out of 40 calls. If you hit the limit, Shopify will return a 429 error, and by default, this module will have a rate limit delay time of 10 seconds. You can modify these options using the following parameters:

```js
var config = {
  //...
  rate_limit_delay: 10000, // 10 seconds (in ms) => if Shopify returns 429 response code
  backoff: 35, // limit X of 40 API calls => default is 35 of 40 API calls
  backoff_delay: 1000 // 1 second (in ms) => wait 1 second if backoff option is exceeded
}
```
# Shopify App Developer

[Join the Shopify Partner Program](https://app.shopify.com/services/partners/signup?ref=grenadeapps)
