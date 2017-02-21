import React from 'react'

export default class StudentList extends React.Component {
  studentClicked (msg) {
    console.log(msg)
  }

  render () {
    const students = [
      { name: 'Rahul', age: 24 },
      { name: 'Laxmi', age: 27 },
      { name: 'Aditya', age: 54 }
    ]
    // const studentList = students.map(student => <li>student.name - student.age</li>)
    return (
      <div>
        <ul>
          {students.map((student, index) => <li key={index} onClick={this.studentClicked.bind(this, student.name)}>{student.name} - {student.age}</li>)}
        </ul>
      </div>
    )
  }
}
