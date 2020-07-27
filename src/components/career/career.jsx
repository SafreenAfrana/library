import React, { Component } from 'react'
import { Navbar,Nav,Card,CardGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './career.css'
import { menus } from '../home/home'
class Career extends Component {
    render() {
        return (
            <div className="career">
                <div>
                    <CardGroup>
                        <Card style={{ color:"white",backgroundColor:"transparent",border:"none",marginTop:"20px",marginLeft:"20px" }}>
                            <h1>Thiruponathar</h1>
                            <h1>  Foundation</h1>
                        </Card>
                        <Navbar expand="lg" variant="dark" className="justify-content-end navbar-light">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                                <Nav className="justify-content-end">
                                    {menus.map(menu => {
                                        return (
                                            <Link to={menu.to} style={{color:"yellow",padding:"10px"}}><h4>{menu.title}</h4>  </Link>
                                        );
                                    })}
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </CardGroup>
                </div>
                <br />
                <div style={{ color:"white"}}>
                    <center>
                        <h1>Career Guidance</h1>
                    </center>
                </div>
                <CardGroup>
                    <div className="cgcard1">
                        <Card style={{backgroundColor:"hsla(0,0%,0%,0.2)",fontSize:"22px",color:"white",margin:"40px"}}>
                            <Card.Title>
                                <br />
                                <center>
                                <   h2>Job Skills</h2>
                                </center>
                            </Card.Title>
                            <Card.Body>
                                <center>
                                    <p>Building job ready technical and
                                    vocational skills to improve
                                    employability</p>
                                </center>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="cgcard2">
                        <Card style={{backgroundColor:"hsla(0,0%,0%,0.2)",fontSize:"22px",color:"white",margin:"40px",marginLeft:"40px"}}>
                            <Card.Title>
                                <br />
                                <center>
                                    <h2>Competitive Exams</h2>
                                </center>
                            </Card.Title>
                            <Card.Body>
                                <center>
                                    <p>Helping with preparation for
                                    national and state
                                    competitive exams</p>
                                </center>
                            </Card.Body>
                        </Card> 
                    </div>
                </CardGroup>
                <br />
                <CardGroup>
                    <div className="cgcard3">
                        <Card style={{backgroundColor:"hsla(0,0%,0%,0.4)",color:"white",fontSize:"22px",marginBottom:"150px",marginLeft:"40px",marginRight:"40px",marginTop:"70px"}}>
                        
                        <Card.Title>
                            <br />
                            <center>
                                <h2>Soft Skills</h2>
                            </center>
                        </Card.Title>
                        <Card.Body>
                            <center>
                                <p>Helping develop communication skills required to crack Group
                                Discussions and Interviews</p>
                            </center>
                        </Card.Body>
                        </Card>
                        </div>
                        <div className="cgcard4">
                    <Card style={{backgroundColor:"hsla(0,0%,0%,0.4)",color:"white",fontSize:"22px",marginBottom:"150px",marginLeft:"40px",marginRight:"40px",marginTop:"70px"}}>
                        <Card.Title>
                            <br />
                            <center>
                                <h2>Job Search</h2>
                            </center>
                        </Card.Title>
                        <Card.Body>
                            <center>
                                <p>Access to list of Government
                                and Private resources for Job
                                Search and <br />related trainings</p>
                            </center>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="cgcard3">
                    <Card style={{backgroundColor:"hsla(0,0%,0%,0.4)",color:"white",fontSize:"22px",marginBottom:"150px",marginLeft:"40px",marginRight:"40px",marginTop:"70px"}}>
                        <Card.Title>
                            <br />
                            <center>
                                <h2>Short Courses</h2>
                            </center>
                        </Card.Title>
                        <Card.Body>
                            <center>
                                <p>Inhouse and online courses
                                on career development and
                                employment</p>
                                <br />
                            </center>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="cgcard4">
                    <Card style={{backgroundColor:"hsla(0,0%,0%,0.4)",color:"white",fontSize:"22px",marginBottom:"150px",marginLeft:"40px",marginRight:"40px",marginTop:"70px"}}>
                        <Card.Title>
                            <br />
                            <center>
                                <h2>News</h2>
                            </center>
                        </Card.Title>
                        <Card.Body>
                            <center>
                                <p>Up to date information on 
                                    Job related advertisements, notifications and 
                                    news items</p>
                            </center>
                        </Card.Body>
                    </Card>
                    </div>
                </CardGroup>
                <br />
            </div>
        )
    }
}

export default Career
