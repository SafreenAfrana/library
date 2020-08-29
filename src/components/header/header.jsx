import React, { Component } from 'react'
import { Navbar,Nav,Card,CardGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './header.css'
import styled ,{ css } from 'styled-components'
export const Button = styled.button`
    background: lightgray;
    border-radius: 1px;
    border: 2px none;
    color: black;
    padding:10px;
    margin-top:40px;
    margin-bottom:0px;
    margin-right:0px;
    margin-left:0px;
    
    }
    ${props => props.primary && css`
    background: darkslategray;
    color: white;
    margin-left:170px;
    margin-right:0px;
    @media (max-width:300px){
        margin-left:80px;
    `}
    `;
    const Container = styled.div`
        text-align: center;
        `
const menus=[
    {
        title:"Home",
        to:"/",
    },
    {
        title:"AboutUs",
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
        title:"GetInvolved",
        to:"/getinvolved"
    }];

class Header extends Component {
    render() {
        return (
            <div>
                <CardGroup>
                    <Card 
                    style={{ 
                        backgroundColor:"transparent",
                        border:"none",
                        margin:"20px 0px 0px 20px",
                        color:"white"
                    }}>
                        <h1>
                            Thiruponathar <br /> Foundation
                        </h1>
                    </Card>
                    <Card 
                    style={{ 
                        backgroundColor:"transparent",
                        border:"none",
                        
                    }}>
                        <Container>
                            <Button primary>
                                English
                            </Button>
                            <Button className="bt1">
                                Tamil
                            </Button>
                        </Container>
                            <Navbar 
                            className="justify-content-end navbar-light"
                            expand="lg" 
                            variant="dark">
                                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                                    <Navbar.Collapse 
                                    id="responsive-navbar-nav" 
                                    className="justify-content-end">
                                        <Nav className="justify-content-end">
                                            {menus.map(menu => {
                                                return (
                                                    <Link 
                                                        to={menu.to}  
                                                        style={{
                                                            color:"darkred",
                                                            padding:"10px"
                                                        }}>
                                                            <h4>
                                                                {menu.title}
                                                            </h4>
                                                    </Link>
                                                );
                                            })}
                                        </Nav>
                                    </Navbar.Collapse>
                            </Navbar>
                    </Card>
                </CardGroup>
            </div>
        )
    }
}

export default Header
