import React, { Component } from 'react'
import { Card,CardGroup} from 'react-bootstrap'
import './student.css'
import Header from '../header/header'
class Student extends Component {
    render() {
        return (
            <div className="student">
                <Header />
                <div 
                style={{ 
                    color:"white",
                    textAlign:"center"
                }}>
                    <h1>
                        Student  Support
                    </h1>
                </div>
                <CardGroup>
                    <div className="studcard1">
                        <Card 
                        style={{
                            backgroundColor:"hsla(0,0%,0%,0.2)",
                            fontSize:"22px",
                            color:"white",
                            margin:"10px 40px 40px 30px",
                            textAlign:"center"
                        }}>
                            <h2>
                                Scholarships
                            </h2>
                            <p>
                                Access full-list of government, <br /> Minority and private <br /> scholarships available <br /> to students
                            </p>
                        </Card>
                    </div>
                    <div className="studcard2">
                        <Card 
                        style={{
                            backgroundColor:"hsla(0,0%,0%,0.2)",
                            fontSize:"22px",
                            color:"white",
                            margin:"10px 40px 40px 30px",
                            textAlign:"center"
                        }}>
                            <h2>
                                College Admission
                            </h2>
                            <p>
                                Get information on admission procedures, deadlines and eligibility for different courses/free admission
                            </p>
                        </Card> 
                    </div>
                </CardGroup>
                <div className="stucard3">
                <CardGroup>
                    <Card 
                    style={{
                        backgroundColor:"hsla(0,0%,0%,0.2)",
                        fontSize:"22px",
                        color:"white",
                        margin:"0px 40px 10px 40px",
                        textAlign:"center"
                    }}>
                        <h2>
                            Free Tuition
                        </h2>
                        <p>
                            Request study support for <br /> challenging subjects
                        </p>
                    </Card>
                    <Card 
                    style={{
                        backgroundColor:"hsla(0,0%,0%,0.2)",
                        fontSize:"22px",
                        color:"white",
                        margin:"0px 40px 10px 40px",
                        textAlign:"center"
                    }}>
                        <h2>
                            After +2 ?
                        </h2>
                        <p>
                            Explore study and work options <br /> available after +2
                        </p>
                    </Card>
                    <Card 
                    style={{
                        backgroundColor:"hsla(0,0%,0%,0.2)",
                        fontSize:"22px",
                        color:"white",
                        margin:"0px 40px 10px 40px",
                        textAlign:"center"
                    }}>
                        <h2>
                            Web Videos
                        </h2>
                        <p>
                            Access to useful online <br /> videos on academic <br /> and general awareness
                        </p>
                    </Card>
                </CardGroup>
                </div>
            </div>
        )
    }
}

export default Student
