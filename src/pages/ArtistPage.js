import React, { Component } from 'react';

import Singer from '../components/Singer';

class ArtistPage extends Component {

  render() {    
    var { match } = this.props;

    return (
        <div>
            <Singer match={ match } />
        </div>
    );
  }
}

export default ArtistPage;