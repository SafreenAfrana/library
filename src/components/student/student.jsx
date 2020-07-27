import React, { Component } from 'react'
import { Navbar,Nav,Card,CardGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './student.css'
import { menus } from '../home/home'
class Student extends Component {
    render() {
        return (
            <div className="student">
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
                                            <Link to={menu.to} style={{color:"white",padding:"10px"}}><h4>{menu.title}</h4></Link>
                                        );
                                    })}
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </CardGroup>
                    </div>
                <div style={{ color:"white"}}>
                    <center>
                            <h1>Student  Support</h1>
                    </center>
                </div>
                <CardGroup>
                    <div className="studcard1">
                        <Card style={{backgroundColor:"hsla(0,0%,0%,0.2)",fontSize:"22px",color:"white",margin:"40px"}}>
                            <Card.Title>
                                <br />
                                <center>
                                    <h2>Scholarships</h2>
                                </center>
                            </Card.Title>
                            <Card.Body>
                                <center>
                                <p>Access full-list of government, Minority and private 
                                    scholarships available to students</p>
                            </center>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="studcard2">
                        <Card style={{backgroundColor:"hsla(0,0%,0%,0.2)",fontSize:"22px",color:"white",margin:"40px"}}>
                            <Card.Title>
                                <br />
                                <center>
                                    <h2>College Admission</h2>
                                </center>
                            </Card.Title>
                            <Card.Body>
                                <center>
                                    <p>Get information on admission
                                procedures, deadlines and
                                eligibility for different
                                courses/free admission</p>
                                </center>
                            </Card.Body>
                        </Card> 
                    </div>
                </CardGroup>
                <CardGroup>
                    <Card style={{backgroundColor:"hsla(0,0%,0%,0.2)",fontSize:"22px",color:"white",margin:"40px",marginTop:"0px"}}>
                        <Card.Title>
                            <br />
                            <center>
                                <h2>Free Tuition</h2>
                            </center>
                        </Card.Title>
                        <Card.Body>
                            <center>
                                <p>Request study support for<br />
                                    challenging subjects</p>
                            </center>
                        </Card.Body>
                    </Card>
                    <Card style={{backgroundColor:"hsla(0,0%,0%,0.2)",color:"white",fontSize:"22px",margin:"40px",marginTop:"0px"}}>
                        <Card.Title>
                            <br />
                            <center>
                                <h2>After +2 ?</h2>
                            </center>
                        </Card.Title>
                        <Card.Body>
                            
                            <center>
                                <p>Explore study and work options<br />
                                available after +2</p>
                            </center>
                        </Card.Body>
                    </Card>
                    <Card style={{backgroundColor:"hsla(0,0%,0%,0.2)",color:"white",fontSize:"22px",margin:"40px",marginTop:"0px"}}>
                        <Card.Title>
                            <br />
                            <center>
                                <h2>Web Videos</h2>
                            </center>
                        </Card.Title>
                        <Card.Body>
                            <center>
                                <p>Access to useful online <br />videos on<br />
                                academic and general awareness</p>
                            </center>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <br />
            </div>
        )
    }
}

export default Student
