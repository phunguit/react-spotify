import React, { Component } from 'react';

import AlbumDetail from '../components/AlbumDetail';

class AlbumPage extends Component {
  render() {
    console.log(this.props);
    return (
        <div>
            <AlbumDetail />
        </div>
    );
  }
}

export default AlbumPage;