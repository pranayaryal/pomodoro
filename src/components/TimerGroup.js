
import React from 'react'
import 'bulma/css/bulma.css'
import Timer from './Timer'

const TimerGroup = () => (
        <div className="columns">
            <Timer>POMODORO</Timer>
            <Timer>SHORT BREAK</Timer>
            <Timer>LONG BREAK</Timer>
        </div>
)


export default TimerGroup