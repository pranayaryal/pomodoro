import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'


class ControlButton extends Component {
    render() {
        return (
            <div>
                <a className="button is-info">Pomodoro</a>
                <a className='button is-warning'>Long Break</a>
                <a className="button is-success">Short Break</a>
            </div>
        );
    }
}

export default ControlButton;
