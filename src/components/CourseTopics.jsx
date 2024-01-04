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
    <>
      <h1>Topics</h1>
      <div className='courses-div'>
        {topics.map((topic) => (
          <Link to={`topic/${topic.id}`} key={topic.id} className='one-course-div'>
            <img src={topic.posterFrame} alt="" />
            <h2>{topic.name}</h2>
            <p>{topic.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default CourseTopics