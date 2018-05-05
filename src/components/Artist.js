import React, { Component } from 'react';

class Artist extends Component {
  render() {
    
    var { artist } = this.props;
    //console.log(artist);
    return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="thumbnail">
                <img src='' alt={ artist.name } />
                <div className="caption">
                <h3><a href="artist/4mzMFxVZNS2uCVNdsVFoj5">{ artist.name }</a></h3>
                <p><span className="label label-warning" style={{marginRight: 5}}>vietnamese pop</span></p>
                </div>
            </div>
        </div>
    );
  }
}

export default Artist;