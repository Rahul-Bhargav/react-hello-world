import React from 'react'
import BookList from './BookList.jsx'
import Book from './Book.jsx'
import BookView from './BookView.jsx'
import StudentList from './studentList.jsx'
import allBooks from './allBooks.js'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = { currentBook: {author: '', title: '', description: '', src: ''} }
  }
  updateView (book) {
    this.setState({ currentBook: book })
  }
  render () {
    const bookComponents = allBooks.map(book =>
      <Book
        key={book.title}
        author={book.author}
        title={book.title}
        description={book.description}
        updateView={this.updateView.bind(this)}
        src={book.src}
      />
    )
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Hello World</h1>
        <div className="books-app">
          <BookList books={bookComponents} />
          <BookView book={this.state.currentBook} />
        </div>
      </div>
    )
  }
}
