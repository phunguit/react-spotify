import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

const BreadcrumbLink = ({ item }) => (
    
    <Route
        path={item.to}
        exact={item.exact}
        children={
            ({ match }) => {
                var classActive = match ? "active" : "";
                var xhtml = item.name;
                if(match.url.length === '/') {
                    xhtml = <Link className='nav-link text-uppercase text-expanded' to={item.to}>{ item.name }</Link>
                }
                return (
                    <li className={`nav-item px-lg-4 ${classActive}`}>
                        { xhtml }
                    </li>
                )
            }
        }
    />
);

class Breadcrumb extends Component {
    render() {
        var { breadcrumb } = this.props;
        
        return (
            <div><ol className="breadcrumb">{ this.getBreadcrumb(breadcrumb) }</ol></div>
        );
    }

    getBreadcrumb(breadcrumb) {
        
        var xhtml = breadcrumb.map((item, index) => {
            return <BreadcrumbLink key={ index } item={ item } />
        });
        return xhtml;
    }
}

const mapStateToProps = (state) => {
    
    return {
        breadcrumb: state.breadcrumb
    }
}

export default connect(mapStateToProps)(Breadcrumb);