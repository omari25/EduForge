import React from 'react'
import { Link } from 'react-router-dom'
import toUrlParam from './toUrlParam'

function Courses({courses}) {
  return (
    <div className='courses-div'>
        <h1 className='courses-title-h1'>EduForge - Courses</h1>
        {courses.map((course) => (
          <Link to={`/courses/${toUrlParam(course.name)}`} key={course.id} className='one-course-div'>
            <img src={course.posterFrame} alt="" />
            <div>
              <h2>{course.name}</h2>
              <p>{course.description}</p>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default Courses