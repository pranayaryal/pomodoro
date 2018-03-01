
const initialState = {
    pomodoro: '15.00',
    short: '5.0',
    long: '10.0'

}

const selectControl = (state = initialState, action) => {
    switch (action.type){
        case 'SET_TIME_LENGTH':
            return action.filter
        default:
            return state
    }
}


export default selectControl