import { combineReducers } from 'redux'
import defineTimings from './defineTimings'
import selectTime from './selectTime'

const pomo = combineReducers({
    defineTimings,
    selectTime
})


export default pomo