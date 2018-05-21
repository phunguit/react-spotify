import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchForm from '../components/SearchForm';
import ArtistList from '../components/ArtistList';
import { ActionGoToHomePage } from '../actions/index';

class HomePage extends Component {

  componentDidMount() {
    this.props.breadcrumbToHomePage();
  }

  render() {
    return (
        <div className="panel panel-info">
            <SearchForm />
            <ArtistList />
        </div>
    );
  }
}

const mapDispatchToProps = dis => {
  return {
    breadcrumbToHomePage: () => {
      dis(ActionGoToHomePage());
    }
  }
}

export default connect(null, mapDispatchToProps)(HomePage);