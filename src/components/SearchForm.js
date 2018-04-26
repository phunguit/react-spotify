import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AcChangeQuery } from '../actions/index';

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };

        this.handleSubmit     = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        var target = e.target;
        var { name, value } = target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.changeQuery(this.state.query);
    }

    render() {
        var queryValue = this.state.query !== null ? this.state.query : this.props.query;

        return (
            <div className="panel-heading">
                <form onSubmit={ this.handleSubmit } className="form-inline">
                    <div className="form-group">
                        <input onChange={ this.handleChange } name="query" value={ queryValue } type="text" className="form-control" placeholder="Enter artist name ..." />
                        <button type="submit" className="btn btn-danger">Search</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        query: state.query
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeQuery: (query) => {
            dispatch(AcChangeQuery(query))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);