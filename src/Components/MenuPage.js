import React,{Component} from 'react';
import eat_healthy from '../eat_healthy.gif';

// Menu component

class MenuPage extends Component {
    render()
    {     
       return(
        <div>
          <h1>Menu</h1>
          <p>Check out our amazing 24/7 menu:</p>
          <img src = {eat_healthy} alt = "Image cant be loaded" width = "300px"/>
            <ol>
              <li>Lazy Loading</li>
              <li>Dynamic Route Matching</li>
              <li>Location Transition Handling</li>
            </ol>
        </div>
      );
    }
  }

  export default MenuPage;