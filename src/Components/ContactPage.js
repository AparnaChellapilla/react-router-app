import React,{Component} from 'react';

// Contact component

class ContactPage extends Component {
    render()
    {     
       return(
        <div>
          <h1>Contact US</h1>
          <p>
            <ul>
              <li>Address</li>
              <li>Call us:</li>
              <li>Hours</li>
             </ul>
             <div>
               <h2>
                 Drop us A Note...
               </h2>
             </div>
            </p>
        </div>
      );
    }
  }

  export default ContactPage;