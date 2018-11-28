import React, { Component } from 'react';
import Header from '../components/headerComponent/header';

 class Error extends Component {
  render() {
    return (
         <div>
           <Header />
            <p>Sorry Page doesn't exist!</p>

        </div>
     );
  }
}

export default Error;
