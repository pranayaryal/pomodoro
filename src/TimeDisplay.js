import React, { Component } from 'react';
import 'bulma/css/bulma.css'

class TimeDisplay extends Component{

    render(){
        return(
            <h1>{ this.props.children }</h1>
        );
    }
}


export default TimeDisplay
