import './App.css';
import React, { Component } from 'react';
import Home from './components/home/home'
import Women from './components/women/women'
import Student from './components/student/student';
import Career  from './components/career/career';
import About from './components/about/about';
import Resource from './components/resources/resource';
import Inspiration from './components/inspiration/inspiration';
import Activities from './components/activities/activities';
import GetInvolved from './components/getinvolved/getinvolved'
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
      <Route path="/" exact component={Home} />
      
      <Route path="/Student" component={Student} />
      
      <Route path="/career" component={Career} />
      
      <Route path="/women" component={Women} />

      <Route path="/about" component={About} />

      <Route path="/resource" component={Resource} />

      <Route path='/inspiration' component={Inspiration} />

      <Route path='/activities' component={Activities} />

      <Route path='/getinvolved' component={GetInvolved} />
      </Switch>
      </div>
      </Router> 
    );
  }
}

export default App;
