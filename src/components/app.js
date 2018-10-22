import React, { Component } from 'react';
import BooksList from '../containers/book_list';
import BookDetail from '../containers/book_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BooksList />
        <BookDetail />
      </div>
    );
  }
}
