import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArtistList extends Component {
  render() {
    
    console.log(this.props.query);

    return (
        <div className="panel-body">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">
                    <img src="https://i.scdn.co/image/23b3caeb7f6d181787bd5bd04f5c0ddbc332dcab" alt="Thu Minh" />
                    <div className="caption">
                    <h3><a href="artist/4mzMFxVZNS2uCVNdsVFoj5">Thu Minh</a></h3>
                    <p><span className="label label-warning" style={{marginRight: 5}}>vietnamese pop</span></p>
                    </div>
                </div>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">
                    <img src="https://i.scdn.co/image/23b3caeb7f6d181787bd5bd04f5c0ddbc332dcab" alt="Thu Minh" />
                    <div className="caption">
                    <h3><a href="artist/4mzMFxVZNS2uCVNdsVFoj5">Thu Minh</a></h3>
                    <p><span className="label label-warning" style={{marginRight: 5}}>vietnamese pop</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        query: state.query
    }
}

export default connect(mapStateToProps, null)(ArtistList);