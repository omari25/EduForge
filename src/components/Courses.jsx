import React from 'react'

function Courses({courses}) {
  return (
    <div className='courses-div'>
        {courses.map((course) => (
          <div key={course.id} className='one-course-div'>
            <img src={course.posterFrame} alt="" />
            <h2>{course.name}</h2>
            <p>{course.description}</p>
          </div>
        ))}
    </div>
  )
}

export default Courses