import React, { Component } from 'react';
import NoteForm from './NoteForm';
import Note from './Note';
import { connect } from 'react-redux';

class List extends Component {
    render() {
        return (
            <div>
                <NoteForm />
                {this.props.mang.map((e, i) => (
                    <Note key={i} index={i}>{e}</Note>
                ))}
            </div>
        );
    }
};

module.exports = connect(function(state) {
    return {
        mang: state.mang
    }
})(List);
