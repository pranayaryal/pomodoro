
const initialState = {
    pomodoro: pom,
    short: short,
    long: long,
    time: ''
}

 const startTicking = (arg) => {
        // var endtime = new Date(Date.parse(new Date()) + 15 * 60 * 1000).getTime()
        var endtime = new Date(Date.parse(new Date()) + arg * 60 * 1000).getTime()
        var timerId = setInterval(() => tick(endtime), 1000)

 }


const pom = new Date(Date.parse(new Date()) + 15 * 60 * 1000).getTime()
const short = new Date(Date.parse(new Date()) + 5 * 60 * 1000).getTime()
const long = new Date(Date.parse(new Date()) + 10 * 60 * 1000).getTime()

const defineTimings = (state = initialState, action) => {
    switch (action.type){
        case '15':

                var diff = getTimeRemaining(action.endtime)

                var a = [
                    ...state,
                    {
                        minutes:diff.minutes,
                        seconds: diff.seconds

                    }
                ]

                return a



        case '5':
            // var diff = getTimeRemaining(short)
            var diff = getTimeRemaining(action.endtime)
            var a = [
                ...state,
                {
                    minutes:diff.minutes,
                    seconds: diff.seconds

                    }
                ]

                return a
        case '10':
            var diff = getTimeRemaining(action.endtime)
            var a = [
                ...state,
                {
                    minutes:diff.minutes,
                    seconds: diff.seconds

                    }
                ]

                return a
        case 'START_TIMER':
            console.log('you are here')
        case 'GET_NOW_DATE':
                console.log('you are innow')
        case 'STOP_COUNTER':
                clearInterval()
                console.log(state)
                return [
                    ...state,
                    {
                        minutes:0,
                        seconds:0
                    }
                ]
                
        default:
            return state

    }  
}



 const getTimeRemaining = (endtime) => {
        var now = new Date(Date.parse(new Date()))
        var t = endtime - now.getTime() 
        var seconds = Math.floor((t/1000) % 60);
        var minutes = Math.floor((t/1000/60) % 60);
        var hours = Math.floor((t/(1000 * 60 * 60)) % 24);
        var days = Math.floor(t/(1000 * 60 * 60 * 24));
        
        return {
            'total': t,
            'days' : days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
 }


 const tick = (endtime) => {
     var t = getTimeRemaining(endtime)
     
    if (t.seconds <= 0){
        clearInterval(this.timerID);
    }
    return t.seconds
    // console.log(t.minutes + ":" + t.seconds)
 }

export default defineTimings