import React, { Component } from 'react';

class Artist extends Component {
    render() {
        var { artist } = this.props;
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">                    
                    { this.getImg(artist) }
                    <div className="caption">
                    <h3><a href="artist/4mzMFxVZNS2uCVNdsVFoj5">{ artist.name }</a></h3>
                    { this.getGenres(artist.genres) }
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

    getImg(artist) {
        var images = artist.images;
        var xhtml = <img src={window.location.origin + '/img/no_image_available.png'} alt='No image' />;        

        if(images !== undefined && images.length > 1) {
        var images = artist.images;
            xhtml = <img src={images[1].url} alt={ artist.name } />
        }
        return xhtml;
    }
}

export default Artist;