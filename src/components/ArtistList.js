import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as configs from '../contants/Configs';
import Artist from './Artist';

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
        if(artists.length === 0) {
            return;
        }
        return artists.map( (artist, index) => {
            return <Artist key={ index } artist={ artist } />
        })
        
    }

    getArtistList(query) {
        if(query === '') {
            return;
        }
        var url = configs.SEARCH_URL + '?q='+ query +'&type=artist'
        var obj = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + configs.ACCESS_TOKEN
            }
        }

        fetch(url, obj).then( (res) => {
            return res.json();
        }).then( (data) => {
            //console.log(resJson);
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