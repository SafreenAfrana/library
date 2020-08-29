import React, { Component } from 'react'
import Header from '../header/header'
import './inspiration.css'
class Inspiration extends Component {
    render() {
        return (
            <div className="inspiration">
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
                        Inspiration
                    </h1>
                </div>
            </div>
        )
    }
}

export default Inspiration
