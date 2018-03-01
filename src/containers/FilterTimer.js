
import React from 'react'
import { connect } from 'react-redux'
import Timer from '../components/Timer'
import { startTimer, setTimeLength, setNow } from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
      todos: startTimer(state.todos, state.visibilityFilter)
    }
 }

const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        onClick: () => {
            console.log(ownProps.filter)
            // var endtime = new Date(Date.parse(new Date()) + 15 * 60 * 1000).getTime();
            var endtime = new Date(Date.parse(new Date()) + parseInt(ownProps.filter) * 60 * 1000).getTime();
            var timerId = setInterval(() => {
                dispatch(setTimeLength(ownProps.filter, endtime))
            }, 1000)
        }
    }
}

const FilterTimer = connect(mapStateToProps, mapDispatchToProps)(Timer)



export default FilterTimer 