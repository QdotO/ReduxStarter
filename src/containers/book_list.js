import React, {Component } from 'react';
import { connect } from 'react-redux';


class BooksList extends Component {
    renderList(){
        return this.props.books.map((book, index) => {
            return (
                <li key={book.title} className="list-group-item">{`${index+1}. ${book.title} `}</li>
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

export default connect(mapStateFromProps)(BooksList);

