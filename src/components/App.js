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
                    <FilterTimer filter="POMODORO">POMODORO</FilterTimer>
                    <FilterTimer filter="SHORT">SHORT BREAK</FilterTimer>
                    <FilterTimer filter="LONG">LONG BREAK</FilterTimer>
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
              <ControlWrapper/>
           </div>


        </div> 

    </div>
)


export default App


