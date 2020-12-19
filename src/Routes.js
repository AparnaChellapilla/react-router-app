import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import MenuPage from './Components/MenuPage';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';
import NavBarPage from './Components/NavBarPage';

class Routes extends Component {
    render() {
        return(
            <div>
                <Router>
                    <NavBarPage />
                    <hr />
                    <Route name ="Home" exact path="/" component = {HomePage} />
                    <Route name ="Menu" exact path="/menu" component = {MenuPage} />
                    <Route name ="About" exact path="/about" component = {AboutPage} />
                    <Route name ="Contact" exact path="/contact" component = {ContactPage} />
               </Router>

            </div>
        )
    }
}

export default Routes;
