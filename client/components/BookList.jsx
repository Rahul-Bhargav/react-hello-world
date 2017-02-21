import React from 'react'

export default class BookList extends React.Component {
  constructor (props) {
    super(props)
    this.Books = this.props.books
  }
  update (msg) {
    console.log(msg)
  }

  render () {
    return (
      <div className="book-list">
          {this.Books}
      </div>
    )
  }
}
