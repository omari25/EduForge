import React from 'react'
import { Link } from 'react-router-dom'

function Courses({courses}) {
  return (    
    <div className='courses-div'>
        {courses.map((course) => (
          <Link to={`courses/${course.id}`} key={course.id} className='one-course-div'>
            <img src={course.posterFrame} alt="" />
            <h2>{course.name}</h2>
            <p>{course.description}</p>
          </Link>
        ))}
    </div>
  )
}

export default Courses