import React from 'react'
import BookList from './BookList.jsx'
import BookView from './BookView.jsx'
import StudentList from './studentList.jsx'
import allBooks from './allBooks.js'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      currentBook: { author: '', title: '', description: '', src: '' }, filteredBooks: allBooks
    }
  }

  updateView (book) {
    this.setState({ currentBook: book })
  }

  getFilteredFiltered (query) {
    const filtered = allBooks.filter(book => book.title.toLowerCase().includes(query.toLowerCase()))
    this.setState(
      {
        filteredBooks: filtered
      }
    )
  }

  render () {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Hello World</h1>
        <div className="books-app">
          <BookList books={this.state.filteredBooks} updateView={this.updateView.bind(this)} filterList={this.getFilteredFiltered.bind(this)}/>
          <BookView book={this.state.currentBook} />
        </div>
      </div>
    )
  }
}
