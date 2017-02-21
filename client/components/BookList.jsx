import React from 'react'
import Book from './Book.jsx'

export default class BookList extends React.Component {
  onFilter (e) {
    this.props.filterList(e.target.value)
  }

  render () {
    const bookComponents = this.props.books.map(book =>
      <Book
        key={book.title}
        author={book.author}
        title={book.title}
        description={book.description}
        updateView={this.props.updateView}
        src={book.src}
      />
    )
    return (
      <div className="book-list">
        <div className="search-bar">
          <input type="text" onChange={this.onFilter.bind(this)} />
        </div>
        <div>
          {bookComponents}
        </div>
      </div>
    )
  }
}
