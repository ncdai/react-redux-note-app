import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../action';

class Note extends Component {
    handleRemove() {
        const { index, dispatch } = this.props;
        dispatch(removeItem(index));
    }
    render() {
        return (
            <div>
                <p>{this.props.children}</p>
                <button onClick={this.handleRemove.bind(this)}>Remove</button>
            </div>
        );
    }
};

module.exports = connect()(Note);
