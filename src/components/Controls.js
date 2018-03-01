import React from 'react'
import PropTypes from 'prop-types'


const Controls = ({ onClickButton, children, ownProps }) => (

            <div className="column">
                <p className="notification is-success" onClick={() => 
                    onClickButton()}>
                    { children }
                    </p> 
            </div>

)

Controls.propTypes = {
    onClickButton: PropTypes.func.isRequired
}




export default Controls