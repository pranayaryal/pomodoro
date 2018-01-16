import React from 'react'
import { connect } from 'react-redux'
import Timer from '../components/Timer'
import MainTime from '../components/MainTime'

import { startTimer, setTimeLength, startPomodoro } from '../actions'

const getFilteredTime = (timings, selectedTime, dispatch ) => {
    switch(selectedTime){
        case 'POMODORO':
            return timings.pomodoro
        case 'SHORT_BREAK':
            return timings.short
        case 'LONG_BREAK':
            return timings.long
        default:
            return timings.pomodoro
    }
}



const mapStateToProps = (state, ownProps, dispatch ) => {
    // return {
    //   time: getFilteredTime(state.defineTimings, state.selectTime ),
    // }
    var last = state.defineTimings[state.defineTimings.length -1]
    if (last !== undefined){
        return {
            time: last.minutes + ":" + last.seconds
        }
    }
 }


// const mapDispatchToProps = (dispatch, ownProps) => {
//     return { 
//         onClick: () => {
//             dispatch(console.log('you clicked this'))
//         }
//     }
// }

// const MainTimeWrapper = connect(mapStateToProps, mapDispatchToProps)(MainTime)
const MainTimeWrapper = connect(mapStateToProps)(MainTime)



export default MainTimeWrapper 