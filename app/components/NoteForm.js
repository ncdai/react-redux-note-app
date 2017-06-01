import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, toggle } from '../action';

class NoteForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(addItem(this.refs.txt.value));
        dispatch(toggle());
        this.refs.txt.value = '';
    }
    handleToggle() {
        const { dispatch } = this.props;
        dispatch(toggle());
    }
    render() {
        const { isAdding } = this.props;
        if (isAdding) return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" ref="txt" placeholder="Enter your note" />
                <button>Add</button>
            </form>
        );
        return (
            <button onClick={this.handleToggle.bind(this)}>+</button>
        );
    }
}

module.exports = connect(function(state) {
    return {
        isAdding: state.isAdding
    };
})(NoteForm);
