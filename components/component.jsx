import React from 'react';
import {render} from 'react-dom';
import {axios} from 'axios';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {data: ''};
    }

    componentDidMount() {
        console.log('DidMount');
        axios.defaults.headers.common['X-Shopify-Access-Token'] = this.props.token;
        axios.get('https://storetestdt.myshopify.com/admin/products.json?limit=10')
        .then(function (data) {
            this.setState({data})
        })
        .catch(function (error) {
            let data = "Error retriving data";
            this.setState({data})
        });
    }

    render(){
        //this.props.token use this token to  make request
      return(
        <div>
            <h1>Insert the rest of your app here.</h1>
            <hr/>
            <h4>Data:</h4>
            <p>{this.state.data}</p>
            <a href="getData/shop">get Shop Data</a>
        </div>
 
      )  
    }
}
module.exports = App;