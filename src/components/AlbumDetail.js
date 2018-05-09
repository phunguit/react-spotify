import React, { Component } from 'react';

import Track from './Track';
import FetchArtistAxios from '../services/FetchArtistAxios';

class AlbumDetail extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            album: null,
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
        var { album, tracks } = this.state;
        if(tracks.length === 0) {
            return <div></div>;
        }

        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">{ album.name }</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            { this.getImg(album) }
                        </div>
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="panel panel-warning">
                                <div className="panel-heading">
                                    <h3 className="panel-title">List Tracks</h3>
                                </div>
                                <div className="panel-body">{ this.getTracks(tracks) }</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getTracks(tracks) {
        return tracks.map( (item, index) => {
            return <Track key={ index } track={ item } />
        });
    }

    getImg(album) {
        var images = album.images;
        var xhtml = <img src={window.location.origin + '/img/no_image_available.png'} alt='No image' />;        

        if(images !== undefined && images.length > 1) {
            xhtml = <img src={images[1].url} alt={ album.name } className='img-rounded img-responsive' />
        }
        return xhtml;
    }

    getAlbumTracksFromAPI(id) {
        FetchArtistAxios.getAblbumTracks(id).then( res => {
            if(res.data !== undefined) {
                this.setState({
                    album: res.data,
                    tracks: res.data.tracks.items
                })
            }
        });
    }
}

export default AlbumDetail;