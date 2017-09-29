//const React = require('react');
import React from 'react';
import {render} from 'react-dom';
import {Page, Card} from '@shopify/polaris';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {data: ''};

    }
    render(){
        //this.props.token use this token to  make request
      return(
        <Page title="Example application">
            <Card sectioned>
                Insert the rest of your app here.
            </Card>
        </Page>
      )  
    }
}
module.exports = App;