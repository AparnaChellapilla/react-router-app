import React,{Component} from 'react';
import Gourmet_Kitchen from '../Gourmet_Kitchen.jpg';

// About component
class AboutPage extends Component {
    render(){
      return(
        <div>
          <h1>About Us</h1>
          <p>We here at the Triple-R love fresh URLs, especially ones tied to awesome React Components.</p>
          <p>It's even better when you can switch between those URLs with ease and share them with friends and family</p>
          <img alt="Image cant be loaded" src={Gourmet_Kitchen} width ="500px"></img>
        </div>
      );
    }
  }

  export default AboutPage;