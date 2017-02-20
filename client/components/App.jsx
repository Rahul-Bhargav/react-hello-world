import React from 'react'
import StudentList from './studentList.jsx'
export default class App extends React.Component {
  render () {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <div>My first react app</div>
        <StudentList />
      </div>
    )
  }
}
