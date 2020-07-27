import React, { Component } from 'react';
import './home.css'
import { Nav, Navbar, Card, CardGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled ,{ css } from 'styled-components'


const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px none;
    color: black;
    padding:10px;
    margin-top:60px;
    margin-bottom:20px;
    margin-right:20px;
    margin-left:0px;

    ${props => props.primary && css`
    background: darkslategray;
    color: white;
    margin-left:180px;
    margin-right:0px;
    `}
    `;
    const Container = styled.div`
    text-align: center;
    `
export const menus=[
    {
        title:"Home",
        to:"/"
    },
    {
        title:"About Us",
        to:"/about"
    },
    {
        title:"Inspiration",
        to:"/inspiration"
    },
    {
        title:"Resources",
        to:"/resource"
    },
    {
        title:"Activities",
        to:"/activities"
    },
    {
        title:"Get Involved",
        to:"/getinvolved"
    }];
class Home extends Component {
    render() {
        return (
                    <div class="home">
                        <CardGroup>
                            <Card style={{ backgroundColor:"transparent",border:"none",marginTop:"20px",marginLeft:"20px" }}>
                                <h1>Thiruponathar</h1>
                                <h1>  Foundation</h1>
                            </Card>
                            <Container>
                            <Button primary>English</Button>
                            <Button>Tamil</Button>
                            </Container>
                        </CardGroup>
                    <Navbar expand="lg" variant="dark" className="justify-content-end navbar-light">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                                <Nav className="justify-content-end">
                                    {menus.map(menu => {
                                        return (
                                            <Link to={menu.to} style={{color:"#343a40",padding:"10px",}}><h4>{menu.title}</h4></Link>
                                        );
                                    })}
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>
                    <br />
                    <div style={{color:"white"}}>
                        <center>
                            <h2>Empowering the underprivileged through Education</h2>
                        </center>
                    </div>
                    <br />
                    <br />
                    <div className="col-lg-12">
                        <Link to="/student"><button className="roundbtn">Student <br />Support</button></Link>
                        <Link to="/career"><button className="roundbtn">Career <br />Guidance</button></Link>
                        <Link to="/women"><button className="roundbtn">Women <br />Empowerment</button></Link>
                    </div>
                    <br />
                    <br />
                </div>
        );
    }
}

export default Home;
