import React from 'react';
import {render} from 'react-dom';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {data: ''};

    }
    render(){
        //this.props.token use this token to  make request
      return(
        <div>
            <h1>Insert the rest of your app here.</h1>
        </div>
 
      )  
    }
}
module.exports = App;