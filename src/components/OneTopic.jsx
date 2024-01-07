import React, { useEffect, useState } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import toUrlParam from './toUrlParam';

function OneTopic({ courses }) {
  const { courseTopic } = useParams();
  const location = useLocation();
  const pathnameArray = location.pathname.split('/');
  const secondLastPart = pathnameArray[pathnameArray.length - 2];

  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const course = courses.find((course) => toUrlParam(course.name) === secondLastPart);
    setSelectedCourse(course);
  }, [courses, secondLastPart]);

  if (!selectedCourse) {
    return <div>Loading...</div>;
  }
  console.log(selectedCourse)
  const wantedTopic = selectedCourse.topics.find((topic)=>toUrlParam(topic.name) === courseTopic)
  console.log(wantedTopic)


  return (
    <div className='topic-resources-div'>
      <div></div>
      <div className='videos-list-div'>
        <div className='videos-list-div-title'>
          <img src={wantedTopic.posterFrame} alt="" />
          <div>
            <h2>{wantedTopic.name}</h2>
            <p>{wantedTopic.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneTopic;
