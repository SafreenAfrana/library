import React, { Component } from 'react';
import './home.css'
import { Link } from 'react-router-dom'
import Header from '../header/header'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                    <br /><br />
                    <div 
                    style={{
                        color:"white",
                        textAlign:"center"
                    }}>
                        <h2>
                            Empowering the underprivileged through Education
                        </h2>
                    </div>
                    <br />
                    
                    <div className="col-lg-12">
                        <Link to="/student">
                            <button className="roundbtn">
                                Student <br /> Support
                            </button>
                        </Link>
                        <Link to="/career">
                            <button className="roundbtn">
                                Career <br /> Guidance
                            </button>
                        </Link>
                        <Link to="/women">
                            <button className="roundbtn">
                                Women <br /> Empowerment
                            </button>
                        </Link>
                    </div>
            </div>
        );
    }
}

export default Home;
