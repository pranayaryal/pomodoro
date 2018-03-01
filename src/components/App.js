import React from 'react'
import TimeColumn from  '../containers/TimeColumn'
import Hero from '../containers/Hero'
import Timer from './Timer'
import MainTime from './MainTime'
import Controls from './Controls'
import ControlWrapper from '../containers/ControlWrapper'
import TimerGroup from './TimerGroup'
import FilterTimer from '../containers/FilterTimer'
import MainTimeWrapper from '../containers/MainTimeWrapper'

import '../App.css'
import 'bulma/css/bulma.css'


const App = () => (
    <div>
        <Hero/>
        <div className="container">
           <div className="section">
                <div className="columns">
                    {/* <FilterTimer filter="POMODORO">POMODORO</FilterTimer> */}
                    <FilterTimer filter="15">POMODORO</FilterTimer>
                    <FilterTimer filter="5">SHORT BREAK</FilterTimer>
                    <FilterTimer filter="10">LONG BREAK</FilterTimer>
                </div>
           </div>
           <div className="section">
                <div className="columns">
                    <div className="column"></div>
                    <div className="column">
                        <MainTimeWrapper/> 
                    </div>
                    <div className="column"></div>
                </div>
           </div>
           <div className="section">
              
            <div className="columns is-gapless">
                <ControlWrapper filter="START">START</ControlWrapper>
                <ControlWrapper filter="STOP">STOP</ControlWrapper>
                <ControlWrapper filter="RESET">RESET</ControlWrapper>
            </div>
           </div>


        </div> 

    </div>
)


export default App


