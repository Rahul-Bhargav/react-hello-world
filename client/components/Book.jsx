import React from 'react'

export default class Book extends React.Component {
  update () {
    this.props.updateView({author: this.props.author, title: this.props.title, description: this.props.description, src: this.props.src})
  }
  render () {
    return (
        <div className="book-preview">
          <div className="book-preview-img">
            <img src={this.props.src} onClick={this.update.bind(this)}/>
          </div>
          <div className="book-preview-details">
            <a onClick={this.update.bind(this)}>{this.props.title}</a>
            <p>Author: {this.props.author}</p>
          </div>
        </div>
    )
  }
}
