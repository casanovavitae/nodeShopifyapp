//const React = require('react');
import React from 'react';
import {render} from 'react-dom';
import {Page, Card} from '@shopify/polaris';
import {EmbeddedApp} from '@shopify/polaris/embedded';
import {axios} from 'axios';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {data: ''};

    }
    render(){
        console.log("props",this.props);
      return(
        <Page title="Example application">
            <Card sectioned>
            This Insert the rest of your app here, including those components detailed below, which can now communicate with the Embedded App SDK.
            </Card>
            <Card sectioned>
            Products Admin:
            {this.showProducts}
            </Card>
        </Page>
      )  
    }

    showProduct(){
        (this.state.data).forEach(function (value) {
            return <li>Product</li>
        });
    }

    componentWillMount () {
        axios.defaults.headers.common['X-Shopify-Access-Token'] = this.props.token;
        axios.get('/admin/products.json')
        .then(function (response) {
            console.log('response',response);
            this.setState({data: response});
        })
        .catch(function (error) {
            console.log(error);
        });

    }
}
module.exports = App;