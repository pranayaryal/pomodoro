

export const startPomodoro = time => {
    return {
        type: 'START_POMODORO',
        time
    }
} 

export const startShort = time => {
    return {
        type: 'START_SHORT',
        time
    }
} 

export const startLong = time => {
    return {
        type: 'START_LONG',
        time
    }
} 


export const stopTimer = time =>  {
    return {
        type: 'STOP_TIMER',
        time
    }
}

export const resetTimer = time => {
    return {
        type: 'RESET_TIMER',
        time

    }
}

export const startTimer = time =>  {
    return {
        type: 'START_TIMER',
        time
    }
}

export const setTimeLength = filter => {
    return {
        type: filter,
        endtime: new Date(Date.parse(new Date()) + 15 * 60 * 1000).getTime(),
        filter

    }
}