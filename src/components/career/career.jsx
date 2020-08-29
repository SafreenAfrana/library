import React, { Component } from 'react'
import { Card,CardGroup} from 'react-bootstrap'
import './career.css'
import  Header from '../header/header'

class Career extends Component {
    render() {
        return (
            <div className="career">
                <Header />
                <div 
                style={{ 
                    
                    textAlign:"center"
                }}>
                    <h1>
                        Career Guidance
                    </h1>
                </div>
                <CardGroup>
                    <div className="cgcard1">
                        <Card 
                        style={{
                            backgroundColor:"hsla(0,0%,0%,0.2)",
                            width:"270px",
                            fontSize:"22px",
                            color:"white",
                            margin:"0px 40px 0px 0px ",
                            textAlign:"center"
                        }}>
                            <h2>
                                Job Skills
                            </h2>
                            <p>
                                Building job ready technical and vocational skills to improve employability
                            </p>
                        </Card>
                    </div>
                    <div className="cgcard2">
                        <Card 
                        style={{
                            backgroundColor:"hsla(0,0%,0%,0.2)",
                            fontSize:"22px",
                            color:"white",
                            margin:"0px 40px 0px 0px",
                            width:"270px",
                            textAlign:"center"
                        }}>
                            <h2>
                                Competitive Exams
                            </h2>
                            <p>
                                Helping with preparation for national and state competitive exams
                            </p>
                        </Card> 
                    </div>
                </CardGroup>
                <br />
                <CardGroup>
                    <div className="cgcard3">
                        <Card 
                        style={{
                            backgroundColor:"hsla(0,0%,0%,0.4)",
                            color:"white",
                            width:"270px",
                            fontSize:"22px",
                            margin:"0px 40px 0px 0px",
                            textAlign:"center"
                        }}>
                            <h2>
                                Soft Skills
                            </h2>
                            <p>
                                Helping develop communication skills required to crack Group Discussions and Interviews
                            </p>
                        </Card>
                    </div>
                    <div className="cgcard4">
                        <Card 
                        style={{
                            backgroundColor:"hsla(0,0%,0%,0.4)",
                            width:"270px",
                            color:"white",
                            fontSize:"22px",
                            margin:"0px 40px 0px 0px",
                            textAlign:"center"
                        }}>
                            <h2>
                                Job Search
                            </h2>
                            <p>
                                Access to list of Government and Private resources for Job Search and related trainings
                            </p>
                        </Card>
                    </div>
                    <div className="cgcard3">
                        <Card 
                        style={{
                            backgroundColor:"hsla(0,0%,0%,0.4)",
                            width:"270px",
                            color:"white",
                            fontSize:"22px",
                            margin:"0px 40px 0px 0px",
                            textAlign:"center"
                        }}>
                            <h2>
                                Short Courses
                            </h2>
                            <p>
                                Inhouse and online courses on career development and employment
                            </p>
                        </Card>
                    </div>
                    <div className="cgcard4">
                        <Card 
                        style={{
                            backgroundColor:"hsla(0,0%,0%,0.4)",
                            width:"270px",
                            color:"white",
                            fontSize:"22px",
                            margin:"0px 40px 0px 0px",
                            textAlign:"center"
                        }}>
                            <h2>
                                News
                            </h2>
                            <p>
                                Up to date information on Job related advertisements, notifications and news 
                            </p>
                        </Card>
                    </div>
                </CardGroup>
                
            </div>
        )
    }
}

export default Career
