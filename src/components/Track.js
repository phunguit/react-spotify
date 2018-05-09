import React, { Component } from 'react';

class Tract extends Component {
  render() {
    var { track } = this.props;

    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 track">
            <h4>{ track.name }</h4>
            <audio src={ track.external_urls.spotify } controls>Your browser does not support the audio element.</audio>
        </div>
    );
  }
}

export default Tract;