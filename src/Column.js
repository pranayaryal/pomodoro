import React, { Component } from 'react';
import 'bulma/css/bulma.css'

class Column extends Component{

    render(){
        return(
            <div className="column">
                { this.props.children }
            </div>
        );
    }
}


export default Column
