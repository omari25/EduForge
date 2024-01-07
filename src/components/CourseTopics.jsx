import React from 'react'
import { Link, useParams } from 'react-router-dom';
import toUrlParam from './toUrlParam';

function CourseTopics({ courses }) {

  const { courseName } = useParams();

  const selectedCourse = courses.find(course => toUrlParam(course.name) === courseName);

  if (!selectedCourse) {
    return <div style={{textAlign: "center"}}>Loading...</div>;
  }

  const topics = selectedCourse.topics

  return (
    <div className='courses-div'>
      <h1 className='courses-title-h1'>EduForge - Courses - Topics</h1>
      {topics.map((topic) => (
        <Link to={`${toUrlParam(topic.name)}`} key={topic.id} className='one-course-div'>
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