import React, { Component } from 'react';

import Album from './Album';
import FetchArtistAxios from '../services/FetchArtistAxios';

class Singer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            artist: null,
            albums: []
        };
    }

    componentWillMount() {
        var id = this.props.match.params.id;
        this.getArtistFromAPI(id);
    }

    render() {
        var { artist } = this.state;

        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Singer</h3>
                </div>
                <div className="panel-body">
                    <div className="panel-body">                    
                        <div className="col-sm-4 col-md-4">
                            { this.getImg(artist) }
                            <blockquote style={{marginTop: 20}}>
                                <p>Thu Minh</p>
                            </blockquote>
                            <p><i className="glyphicon glyphicon-play-circle" /><a rel="noopener noreferrer" target="_blank" href="https://open.spotify.com/artist/4mzMFxVZNS2uCVNdsVFoj5"> View Spotify</a><br /><br /><i className="glyphicon glyphicon-play-circle" /> Genres:<span className="label label-warning" style={{marginRight: 5}}>vietnamese pop</span></p>
                        </div>

                        <div className="col-sm-8 col-md-8">
                            <div className="panel panel-danger">
                                <div className="panel-heading">
                                    <h3 className="panel-title">List Albums</h3>
                                </div>
                                <div className="panel-body list-albums">
                                    <Album />
                                    <Album />
                                    <Album />
                                    <Album />
                                    <Album />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getArtistFromAPI(id) {
        FetchArtistAxios.getArtist(id).then( res => {
            if(res.data !== null) {
                this.setState({
                    artist: res.data
                });
            }
        });

    }

    getImg(artist) {
        if(artist === null) {
            return;
        }
        var images = artist.images;
        var xhtml = <img src={window.location.origin + '/img/no_image_available.png'} alt='No image' />;        

        if(images !== undefined && images.length > 1) {
            xhtml = <img src={images[1].url} alt={ artist.name } className='img-rounded img-responsive' />
        }
        return xhtml;
    }
}

export default Singer;