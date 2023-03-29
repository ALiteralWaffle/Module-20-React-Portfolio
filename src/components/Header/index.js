import React, {Component} from 'react';
import {Route, Navigate, Router} from "react-router-dom";
import Navigation from '../../components/navigation.js';
import About from '../../components/About';
import Contact from '../../components/contact.js';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/resume.js';

class Header extends Component {   
    render() {
    return (
    <Router>
        <div className="row Header" id="header">
             <a href="https://github.com/ALiteralWaffle/Module-20-React-Portfolio"></a>
            <Navigation/>
        </div>

    <div className="content">
          <Route exact path="/" render={() => (<Navigate to="/portfolio"/>)}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
        </div>
    </Router>
    )
}
}

export default Header;