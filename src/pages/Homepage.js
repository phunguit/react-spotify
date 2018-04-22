import React, { Component } from 'react';

import SearchForm from '../components/SearchForm';
import Artist from '../components/Artist';

class Homepage extends Component {
  render() {
    return (
        <div className="panel panel-info">
            <SearchForm />

            <div className="panel-body">
                <Artist />
                <Artist />
                <Artist />
                <Artist />
            </div>
        </div>
    );
  }
}

export default Homepage;