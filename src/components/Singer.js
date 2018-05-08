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
        if(artist === null) {
            return <div></div>;
        }
        //console.log(artist);
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
                                <p>{ artist.name }</p>
                            </blockquote>
                            { this.getGenres(artist.genres) }
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

    getGenres(renres) {
        if(renres.length === 0) {
            return;
        }
        return renres.map((item, index) => {
            return <p key={ index }><span className="label label-warning" style={{marginRight: 5}}>{ item }</span></p>;
        });
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
        var images = artist.images;
        var xhtml = <img src={window.location.origin + '/img/no_image_available.png'} alt='No image' />;        

        if(images !== undefined && images.length > 1) {
            xhtml = <img src={images[1].url} alt={ artist.name } className='img-rounded img-responsive' />
        }
        return xhtml;
    }
}

export default Singer;