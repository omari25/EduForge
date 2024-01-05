import React from 'react'
import { Link, useParams } from 'react-router-dom';

function CourseTopics({ courses }) {

  const { id } = useParams();

  const selectedCourse = courses.find(course => course.id === parseInt(id, 10));

  if (!selectedCourse) {
    return <div>No item found for the given ID</div>;
  }

  const topics = selectedCourse.topics

  return (
    <div className='courses-div'>
      <h1 className='courses-title-h1'>EduForge - Courses - Topics</h1>
      {topics.map((topic) => (
        <Link to={`/courses/topics/${topic.id}`} key={topic.id} className='one-course-div'>
          <img src={topic.posterFrame} alt="" />
          <div>
            <h2>{topic.name}</h2>
            <p>{topic.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CourseTopics