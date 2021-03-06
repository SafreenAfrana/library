import React, { Component } from 'react'
import Header from '../header/header'
import './about.css'

class About extends Component {
    render() {
        return (
            <div className="about">
                <Header />
                <div
                className="heading" 
                style={{
                    backgroundColor:"transparent",
                    border:"none",
                    color:"white", 
                    textAlign:"center"
                }}>
                    <h1>
                        About Us
                    </h1>
                </div>
            </div>
        )
    }
}

export default About
