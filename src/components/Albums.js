import React, { Component } from 'react';

class Albums extends Component {
  render() {
    return (
        <div className="col-sm-8 col-md-8">
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">List Albums</h3>
                </div>
                <div className="panel-body list-albums">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="thumbnail">
                        <img src="https://i.scdn.co/image/757378d73eedc6a53cff69b49eca173fccc9ad02" alt="Giác Quan Thứ, Vol. 6" className="img-responsive" />
                        <div className="caption">
                            <h5><a href="/album/6GzEDxxX5HJBdR6iohvrPc">Giác Quan Thứ, Vol. 6</a></h5>
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="thumbnail">
                        <img src="https://i.scdn.co/image/2f8807acbf4fa0dce6f04eb053e6037e38bb963f" alt="Nếu Như" className="img-responsive" />
                        <div className="caption">
                            <h5><a href="/album/4cH93HgkeeW8IKJWsIY0gZ">Nếu Như</a></h5>
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="thumbnail">
                        <img src="https://i.scdn.co/image/5c5c23ce44130eedf9ad8962291a31c2167adc5a" alt="Tình Em" className="img-responsive" />
                        <div className="caption">
                            <h5><a href="/album/3i1PrGebuqYXXjyzln0c8t">Tình Em</a></h5>
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="thumbnail">
                        <img src="https://i.scdn.co/image/9c31f69d2c8edb8b818430df720bcfd17b1b7cd4" alt="Lời Cuối" className="img-responsive" />
                        <div className="caption">
                            <h5><a href="/album/6fG9XZtB869BUEBu351vlO">Lời Cuối</a></h5>
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="thumbnail">
                        <img src="https://i.scdn.co/image/23b3caeb7f6d181787bd5bd04f5c0ddbc332dcab" alt="Ước Mơ" className="img-responsive" />
                        <div className="caption">
                            <h5><a href="/album/1HpUqkEe7blePla2Gso1lf">Ước Mơ</a></h5>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Albums;