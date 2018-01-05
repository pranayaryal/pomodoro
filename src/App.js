import React, {Component} from 'react';
import './App.css';
import ControlButton from './ControlButton'
import Columns from './Columns'
import Column from './Column'
import TimeDisplay from './TimeDisplay'
import moment from 'moment'

import 'bulma/css/bulma.css'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = 
        { 
            date: new Date(),
            time: {
                total: '',
                days: '',
                hours: '',
                minutes: '',
                seconds: ''
            },

            // endtime : new Date(Date.parse(new Date()) + 15 * 60 * 1000)
        }
        this.startTicking = this.startTicking.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
    }


    tick(endtime){
        var t = this.getTimeRemaining(endtime)

        this.setState({
            time: t
        })

        if (t.seconds <= 0){
            clearInterval(this.timerID);
        }
    }
    
    startTicking(){
        // console.log(moment(new Date()).add(30, 'm').toDate().toTimeString())
        console.log('you are here')
        var endtime = new Date(Date.parse(new Date()) + 15 * 60 * 1000).getTime()
        this.timerID = setInterval(() => this.tick(endtime), 1000);
    }
    
    componentWillUnmount(){
       clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Pomodoro Technique
                            </h1>
                            <h2 className="subtitle">
                                By Pranay Aryal
                            </h2>
                        </div>
                    </div>

                </section>
                <div className="section">
                    <div className="container">
                        <Columns>
                            <Column>
                                <button className="button is-info" onClick={ this.startTicking }>POMODORO</button>
                            </Column>
                            <Column>
                                <button className="button is-warning">SHORT BREAK</button>
                            </Column>
                            <Column>
                                <button className="button is-warning" onClick={ this.stopTimer }>LONG BREAK</button>
                            </Column>
                        </Columns>
                        <Columns>
                            <Column/>
                            <Column>
                                <TimeDisplay>{ this.state.time.minutes + ":" }   { this.state.time.seconds }</TimeDisplay>
                            </Column>
                            <Column/>
                        </Columns>
                    </div>
                </div>
            </div>
        );
    }

    stopTimer(){
        this.setState({
            time: {
                total: '',
                days: '',
                hours: '',
                minutes: '',
                seconds: ''
            }
        })
    }


    getTimeRemaining(endtime) {
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

    setEndTime(endtime){

        this.setState({
            endtime: endtime
        })
    }

    setPom(){
        this.setState((prevState, props) => {
            // endtime: new Date(Date.parse(new Date()) + 15 * 60 * 1000)
            endtime: prevState.endtime + 15 * 60 * 1000
        })
    }

    // updateClock(endtime){
    //     var t = this.getTimeRemaining(endtime)

    //     if (t.total < 0){
    //         clearInterval(timeInterval);
    //     }
    // }

    //call updateClock()

    //var timeInterval = setInterval(updateClock, 1000)


    // var deadline = new Date(Date.parse(new Date())) + 15 * 60 * 1000
    // updateClock(deadline);
}

export default App;