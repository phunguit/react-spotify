import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Album extends Component {
    render() {
        var { album } = this.props;
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">
                { this.getImg(album) }
                <div className="caption">
                    <h5><Link to={`/album/${album.id}`}>{ album.name }</Link></h5>
                </div>
                </div>
            </div>
        );
    }

    getImg(album) {
        var images = album.images;
        var xhtml = <img src={window.location.origin + '/img/no_image_available.png'} alt='No image' />;        

        if(images !== undefined && images.length > 1) {
            xhtml = <img src={images[1].url} alt={ album.name } className='img-rounded img-responsive' />
        }
        return xhtml;
    }
}

export default Album;