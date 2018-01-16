
import React from 'react'
import { connect } from 'react-redux'
import Timer from '../components/Timer'
import { startTimer, setTimeLength } from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
      todos: startTimer(state.todos, state.visibilityFilter)
    }
 }

const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        onClick: () => {
            setInterval(() => {
                dispatch(setTimeLength(ownProps.filter))
            }, 1000)
        }
    }
}

const FilterTimer = connect(mapStateToProps, mapDispatchToProps)(Timer)



export default FilterTimer 