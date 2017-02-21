import React from 'react'

export default class BookView extends React.Component {
  render () {
    return (
      <div className="book-view">
        <img src={this.props.book.src} />
        <p>{this.props.book.title}</p>
        <p>Author: {this.props.book.author}</p>
        <p>Description: {this.props.book.description}</p>
      </div>
    )
  }
}

BookView.defaultProps = { book: { author: '', description: '', title: '' } }
