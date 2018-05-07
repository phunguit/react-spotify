import React, { Component } from 'react';
import { connect } from 'react-redux';

import Artist from './Artist';
import FetchAPI from '../services/FetchAPI';

class ArtistList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            artists: []
        };
    }

    componentWillReceiveProps(nextProps) {
        this.getArtistList(nextProps.query);
    }

    render() {
        var { artists } = this.state;

        return (
            <div className="panel-body">{ this.biddingArtistList(artists) }</div>
        );
    }

    biddingArtistList(artists) {
        var xhtml = 'Please enter the artist you want to search!';

        if(artists.length !== 0) {
            xhtml = artists.map( (artist, index) => {
                return <Artist key={ index } artist={ artist } />
            })
        }
        return xhtml;
    }

    getArtistList(query) {
        if(query === '') {
            this.setState({
                artists: []
            })
            return;
        }
        
        FetchAPI.fetchToSearchArtist(query).then( (data) => {
            if(data !== undefined && data !== null) {
                this.setState({
                    artists: data.artists.items
                })
            }
        });
    }
}

const mapStateToProps = (state) => {
    return {
        query: state.query
    }
}

export default connect(mapStateToProps, null)(ArtistList);