import React from 'react'

export default class StudentList extends React.Component {
  render () {
    const students = [
      { name: 'Rahul', age: 24 },
      { name: 'Laxmi', age: 27 },
      { name: 'Aditya', age: 54 }
    ]
    // const studentList = students.map(student => <li>student.name - student.age</li>)
    return (
      <div style={{textAlign: 'left'}}>
        <ul>
          {students.map((student, index) => <li key={index}>{student.name} - {student.age}</li>)}
        </ul>
      </div>
    )
  }
}
