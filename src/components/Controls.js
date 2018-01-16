import React from 'react'
import PropTypes from 'prop-types'


const Controls = ({ onClickButton }) => (

    <div className="columns is-gapless">
            <div className="column">
                <p className="notification is-success" onClick={() => onClickButton('SHORT_BREAK')}>START</p> 
            </div>
            <div className="column">
                <p className="notification is-link">STOP</p> 
            </div>
            <div className="column">
                <p className="notification is-danger" onClick={() => onClickButton('POMODORO')}>RESET</p> 
            </div>
    </div>

)

Controls.propTypes = {
    onClickButton: PropTypes.func.isRequired
}




export default Controls