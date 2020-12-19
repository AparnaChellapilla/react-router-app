import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class NavBarPage extends Component {
    render() {
        return(
            <div className ="nav">
                <Link to ="/">Home</Link>|
                <Link to ="/Menu">Menu</Link>|
                <Link to ="/About">About</Link>|
                <Link to ="./Contact">Contact</Link>
            </div>
        )
    }
      
}

export default NavBarPage;