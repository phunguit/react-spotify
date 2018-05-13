import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './Header';
import Breadcrumb from './Breadcrumb';
import routes from '../routes-config';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <div className="row">
                <Breadcrumb />
                { this.getContentPage(routes) }  
            </div>
          </div>
        </div>
      </Router>      
    );
  }

  getContentPage(routes) {
    return routes.map((route, index) => {
      return <Route key={ index } path={ route.path } exact={ route.exact } component={ route.main } />      
    });
  }
}

export default App;
