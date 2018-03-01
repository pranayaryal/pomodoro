import React from 'react'
import { connect } from 'react-redux'
import Controls from '../components/Controls'
import { startTimer, setTimeLength, filterControls } from '../actions'

const mapStateToProps = (state) => {
    return {
      todos: startTimer(state.todos, state.visibilityFilter)
    }
 }

const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        onClickButton : () => {
            dispatch(filterControls(ownProps.filter))
        }
    }
}

const ControlWrapper = connect(mapStateToProps, mapDispatchToProps)(Controls)

export default ControlWrapper