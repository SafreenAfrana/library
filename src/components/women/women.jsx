import React, { Component } from 'react'
import './women.css'
import { Link } from 'react-router-dom'
import { Card,CardGroup,Nav,Navbar } from 'react-bootstrap'
import { menus } from '../home/home'
class Women extends Component {
    render() {
        return (
            <div className="women">
                <div>
                    <CardGroup>
                        <Card style={{ backgroundColor:"transparent",border:"none",marginTop:"20px",marginLeft:"20px" }}>
                            <h1>Thiruponathar</h1>
                            <h1>  Foundation</h1>
                        </Card>
                        <Navbar expand="lg" variant="dark" className="justify-content-end navbar-light">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                                <Nav className="justify-content-end">
                                    {menus.map(menu => {
                                        return (
                                            <Link to={menu.to} style={{color:"#343a40",padding:"10px"}}><h4>{menu.title}</h4>  </Link>
                                        );
                                    })}
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </CardGroup>
                    </div>
                <div>
                    <center>
                            <h1>Women Empowerment</h1>
                    </center>
                </div>
                <CardGroup className="cards">
                    <Card  style={{backgroundColor:"hsla(240,100%,25%,0.4)",color:"white",fontSize:"22px",margin:"30px"}}>
                        <Card.Title>
                            <center>
                            <br />
                            <h3>Micro-Finance</h3>
                            </center>
                        </Card.Title>
                        <Card.Body>
                            <center>
                                <p>Helping build woman self help groups within the community</p>
                            </center>
                        </Card.Body>
                    </Card>
                    <Card style={{backgroundColor:"hsla(240,100%,25%,0.4)",color:"white",fontSize:"22px",margin:"30px"}}>
                        <Card.Title>
                            <center>
                                <br />
                                <h3>Marriage Aid</h3>
                            </center>
                        </Card.Title>
                        <Card.Body>
                        <center>
                            <p>Trusts donations for marriage related expenses for poor families</p>
                        </center>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <br />
                <CardGroup className="cards">
                    <Card  style={{backgroundColor:"hsla(240,100%,25%,0.4)",color:"white",fontSize:"22px",margin:"30px"}}>
                        <Card.Title>
                            <center>
                                <br />
                                <h3>Job Training</h3>
                            </center>
                        </Card.Title>
                        <Card.Body>
                            <center>
                                <p>Short courses on Tailoring, Mehandi, Beauty Parlour etc</p>
                            </center>
                        </Card.Body>
                    </Card>
                    <Card style={{backgroundColor:"hsla(240,100%,25%,0.4)",color:"white",fontSize:"22px",margin:"30px"}}>
                        <Card.Title>
                            <center>
                                <br />
                                <h3>Awareness Sessions</h3>
                            </center>
                        </Card.Title>
                        <Card.Body>
                            <center>
                                <p>Banking Frauds, Nutrition Hygiene, Childcare</p>
                            </center>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <br />
            </div>
        )
    }
}

export default Women
