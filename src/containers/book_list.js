import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BooksList extends Component {
    renderList() {
        return this.props.books.map((book, index) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title} 
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}
function mapStateFromProps(state) {
    //Whatever is returned will show up as props
    //inside of BookList
    return {
        books: state.books
    }
}

//Whatever is returned from this function is available within the containers props object
function mapDispatchToProps(dispatch) {
    //whenever selectBook is called the result should be pass to all reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch); //takes the actions provided in the first param and publishes
}
/* Promotes BookList from a component to a container 
*   - it needs to know about this new dispatch method, selectBook. 
*  Make it available as a prop. */
export default connect(mapStateFromProps, mapDispatchToProps)(BooksList);

