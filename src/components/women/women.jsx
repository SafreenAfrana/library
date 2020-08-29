import React, { Component } from 'react'
import './women.css'
import { Card,CardGroup } from 'react-bootstrap'
import Header from '../header/header'

class Women extends Component {
    render() {
        return (
            <div className="women">
                <Header />
                <div
                style={{
                    textAlign:"center"
                }}>
                    <h1>
                        Women Empowerment
                    </h1>
                </div>
                <CardGroup className="cards">
                    <Card  
                    style={{
                        backgroundColor:"#ffc10729",
                        color:"white",
                        fontSize:"22px",
                        margin:"30px",
                        width:"240px",
                        textAlign:"center",
                        border:"none"
                    }}>
                        <h3>
                            Micro-Finance
                        </h3>
                        <p> 
                            Helping build woman self help groups within the community
                        </p>
                    </Card>
                    <Card 
                    style={{
                        backgroundColor:"#ffc10729",
                        color:"white",
                        fontSize:"22px",
                        margin:"30px",
                        width:"240px",
                        textAlign:"center",
                        border:"none"
                    }}>
                        <h3>
                            Marriage Aid
                        </h3>
                        <p>
                            Trusts donations for marriage related expenses for poor families
                        </p>
                    </Card>
                </CardGroup>
                <CardGroup className="cards">
                    <Card  
                    style={{
                        backgroundColor:"#ffc10729",
                        color:"white",
                        fontSize:"22px",
                        margin:"0px 30px 30px 30px",
                        width:"240px",
                        padding:"8px",
                        textAlign:"center",
                        border:"none"
                    }}>
                        <h3>
                            Job Training
                        </h3>
                        <p>
                            Short courses on Tailoring, Mehandi, Beauty Parlour etc
                        </p>
                    </Card>
                    <Card 
                    style={{
                        backgroundColor:"#ffc10729",
                        color:"white",
                        fontSize:"22px",
                        margin:"0px 30px 30px 30px",
                        width:"240px",
                        padding:"8px",
                        textAlign:"center",
                        border:"none"
                    }}>
                        <h3>
                            Awareness Sessions
                        </h3>
                        <p>
                            Banking Frauds, Nutrition Hygiene, Childcare
                        </p>
                    </Card>
                </CardGroup>
            </div>
        )
    }
}

export default Women
