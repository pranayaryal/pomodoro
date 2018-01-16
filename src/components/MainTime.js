import React from 'react'
import TimeColumn from  '../containers/TimeColumn'
import Timer from './Timer'
import PropTypes from 'prop-types'



const MainTime = ({ time, state }) => (
    <div>
        <h1 className="subtitle is-1">{ time } </h1>
    </div>
)

MainTime.prototype = {
    time: PropTypes.string.isRequired
}


export default MainTime