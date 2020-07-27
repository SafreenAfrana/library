import React, { Component } from 'react'
import { Navbar,Nav,Card,CardGroup,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './resource.css'
import { menus } from '../home/home'
class Resource extends Component {
    render() {
        return (
            <div className="resource">
                <CardGroup>
                            <Card style={{ backgroundColor:"transparent",border:"none",marginTop:"20px",marginLeft:"20px",color:"white" }}>
                                <h1>Thiruponathar</h1>
                                <h1>  Foundation</h1>
                            </Card>
                    <Navbar expand="lg" variant="dark" className="justify-content-end navbar-light">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                                <Nav className="justify-content-end">
                                    {menus.map(menu => {
                                        if((menu.to  !== '/') && (menu.to  !== '/resource')){
                                        return (
                                            <Link to={menu.to} style={{color:"white",padding:"10px",}}><h4>{menu.title}</h4></Link>
                                        );
                                        }
                                        else{
                                            return null
                                        }
                                    })}
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>
                    </CardGroup>
                    <CardGroup>

                            <Card className="heading1" style={{backgroundColor:"transparent",border:"none",marginLeft:"60px"}}>
                            
                        <h1 style={{color:"white",textAlign:"end"}}>Resources</h1>
                        </Card>
                        <Card style={{backgroundColor:"transparent",border:"none"}}>
                    <Link to="/"><Button style={{backgroundColor:"whitesmoke",border:"none",float:"right",marginBottom:"10px",marginRight:"10px",color:"darkgoldenrod"}}><center><h4>Back to Home Page</h4></center></Button>
                    </Link>
                    </Card>
                    </CardGroup>
                    
            </div>
        )
    }
}

export default Resource
