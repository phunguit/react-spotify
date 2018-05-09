import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

const BreadcrumbLink = ({ item }) => {
    //debugger
    <Route
        path={item.to}
        exact={item.exact}
        children={
            ({ match }) => {
                console.log(match);
                var classActive = match ? "active" : "";
                return (
                    <li className={`nav-item px-lg-4 ${classActive}`}>
                        <Link className='nav-link text-uppercase text-expanded' to={item.to}>{item.name}</Link>
                    </li>
            )}
        }
    />
};

class Breadcrumb extends Component {
    render() {
        var { breadcrumb } = this.props;
        //console.log(breadcrumb);

        return (
            <div><ol className="breadcrumb">
            </ol></div>
        );
    }

    getBreadcrumb(breadcrumb) {
        
        var xhtml = breadcrumb.map((item, index) => {
            return <BreadcrumbLink key={ index } item={ item } />
        });
        //console.log(xhtml);
        return xhtml;
    }
}

const mapStateToProps = (state) => {
    return {
        breadcrumb: state.breadcrumb
    }
}

export default connect(mapStateToProps)(Breadcrumb);