import React, { Component } from 'react';

import Header from './Header';
import Breadcrumb from './Breadcrumb';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          
          <div className="row">              
              <Breadcrumb />

              
          </div>
        </div>
      </div>
    );
  }
}

export default App;
