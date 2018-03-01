import { combineReducers } from 'redux'
import defineTimings from './defineTimings'
import selectControl from './selectControl'

const pomo = combineReducers({
    defineTimings,
    selectControl
})


export default pomo