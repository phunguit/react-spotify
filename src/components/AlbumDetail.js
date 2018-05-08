import React, { Component } from 'react';

import Track from './Track';
import FetchArtistAxios from '../services/FetchArtistAxios';

class AlbumDetail extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            artist: null,
            tracks: []
        };
    }

    componentWillMount() {
        var { match } = this.props;
        var id = match.params.id;

        this.getAlbumTracksFromAPI(id);
    }

    render() {
        var { match } = this.props;
        var { tracks, artist } = this.state;
        if(tracks.length === 0) {
            return <div></div>;
        }
        console.log(artist);
        
        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">Album 1</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4"><img className="media-object img-thumbnail" src="https://i.scdn.co/image/757378d73eedc6a53cff69b49eca173fccc9ad02" alt="singer" /></div>
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="panel panel-warning">
                            <div className="panel-heading">
                                <h3 className="panel-title">List Tracks</h3>
                            </div>
                            <div className="panel-body">
                                <Track />
                                <Track />
                                <Track />
                                <Track />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getAlbumTracksFromAPI(id) {
        FetchArtistAxios.getAblbumTracks(id).then( res => {
            if(res.data !== undefined) {
                this.setState({
                    artist: res.data.items[0].artists[0],
                    tracks: res.data.items
                })
            }
        });
    }
}

export default AlbumDetail;