import React, { Component } from 'react';

import AlbumDetail from '../components/AlbumDetail';

class AlbumPage extends Component {
  render() {
    var { match } = this.props;
    return (
        <div>
            <AlbumDetail match={ match } />
        </div>
    );
  }
}

export default AlbumPage;