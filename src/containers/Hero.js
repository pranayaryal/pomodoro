import React from 'react'
import { connect } from 'react-redux'
import 'bulma/css/bulma.css'


let Hero = ({ dispatch }) => {
    return (

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
    )
}

export default Hero