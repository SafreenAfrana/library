import React, { Component } from 'react'
import  Header  from '../header/header'
import './resource.css'
class Resource extends Component {
    render() {
        return (
            <div className="resource">
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
                        Resources
                    </h1>
                </div>
            </div>
        )
    }
}

export default Resource
