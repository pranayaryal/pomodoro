import React from 'react'
import { connect } from 'react-redux'
import Controls from '../components/Controls'
import { startTimer, setTimeLength } from '../actions'

const mapStateToProps = (state) => {
    return {
      todos: startTimer(state.todos, state.visibilityFilter)
    }
 }

const mapDispatchToProps = dispatch => {
    return { 
        onClickButton: id => {
            console.log(id)
            dispatch(setTimeLength(id))
        }
    }
}

const ControlWrapper = connect(mapStateToProps, mapDispatchToProps)(Controls)

export default ControlWrapper