import React, { Component } from 'react'
import Header from '../header/header'
import './getinvolved.css'
class GetInvolved extends Component {
    render() {
        return (
            <div className="getinvolved">
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
                        Get Involved
                    </h1>
                </div>
            </div>
        )
    }
}

export default GetInvolved
