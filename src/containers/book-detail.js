import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookDetail extends Component {
    constructor(props) {
        super (props);

        this.state = { book: null };
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.book == undefined || this.props.book.title != nextProps.book.title)
        {
            this.setState({ book: nextProps.book });
        }
    }

    render() {
        if (!!this.state.book)
        {
            return (
                <div>
                    <h3>Details for :</h3>
                    <div>Title : { this.state.book.title }</div>
                    <div>Pages : { this.state.book.pages }</div>
                    <div>
                        Description:
                        <input
                            value={ this.state.book.description }
                            onChange={ (event) => this.onDescriptionChange(event.target.value) } />
                    </div>
                    <div>
                        <button onClick={ () => this.props.editBook(this.state.book) }>
                            Validate
                        </button>
                    </div>
                </div>
            );
        }
        else
        {
            return (
                <div>Select a book to get started.</div>
            );
        }
    }

    onDescriptionChange(description) {
        var newBook = this.state.book;
        newBook.description = description;
        this.setState({ book: newBook });
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ editBook: editBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
