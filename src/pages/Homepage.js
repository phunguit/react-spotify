import React, { Component } from 'react';

import SearchForm from '../components/SearchForm';
import ArtistList from '../components/ArtistList';

class HomePage extends Component {
  render() {
    return (
        <div className="panel panel-info">
            <SearchForm />
            <ArtistList />
        </div>
    );
  }
}

export default HomePage;