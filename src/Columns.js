import React, { Component } from 'react';
import 'bulma/css/bulma.css'

class Columns extends Component{

    render(){
        return(
            <div className="columns">
                { this.props.children }
            </div>
        );
    }
}


export default Columns
