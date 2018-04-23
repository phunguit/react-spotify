import React, { Component } from 'react';

import Singer from '../components/Singer';
import Albums from '../components/Albums';

class ArtistPage extends Component {
  render() {
    return (
        <div className="panel panel-info">
            <div className="panel-heading">
                <h3 className="panel-title">Singer</h3>
            </div>
            <div className="panel-body">
                <div className="panel-body">                    
                    <Singer />
                    <Albums />
                </div>
            </div>
        </div>
    );
  }
}

export default ArtistPage;