import React from 'react'
import TimeColumn from  '../containers/TimeColumn'
import Hero from '../containers/Hero'
import PropTypes from 'prop-types'
import 'bulma/css/bulma.css'


const Timer = ({  children, onClick }) => (
    <div className="column"> 

        <button className="button is-info"
            onClick={ e => {
                e.preventDefault()
                onClick()
            }
            } 
        >{ children }</button>

    </div>
)

Timer.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}


export default Timer