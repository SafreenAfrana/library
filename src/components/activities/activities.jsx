import React, { Component } from 'react'
import Header from '../header/header'
import './activities.css'

class Activities extends Component {
    render() {
        return (
            <div className="activities">
                <Header />
                <div
                className="heading1" 
                style={{
                    backgroundColor:"transparent",
                    border:"none",
                    color:"white",
                    textAlign:"center"
                }}>
                    <h1>
                        Activities
                    </h1>
                </div>
            </div>
        )
    }
}

export default Activities
