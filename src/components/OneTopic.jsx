import React, { useEffect, useState } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import toUrlParam from './toUrlParam';
import { GoVideo } from "react-icons/go";

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
  const wantedTopic = selectedCourse.topics.find((topic)=>toUrlParam(topic.name) === courseTopic)
  const videos = wantedTopic.resources.videos

  return (
    <div className='topic-resources-div'>
      <div className='one-topic-left-div'>
        <div className='progress-videos-div'>
          <p>Your Progress</p>
        </div>
        <ol className='sidebar-topics-list'>
          {selectedCourse.topics.map((topic)=>(
            <Link to={`/courses/${secondLastPart}/${toUrlParam(topic.name)}`} key={topic.id} className='topics-link-list'>
              <li>
                {topic.name}
              </li>
            </Link>
          ))}
        </ol>
      </div>
      <div className='videos-list-div'>
        <div className='videos-list-div-title'>
          <img src={wantedTopic.posterFrame} alt="" />
          <div>
            <h2>{wantedTopic.name}</h2>
            <p>{wantedTopic.description}</p>
          </div>
        </div>
        {videos.map((video)=>(
          <Link to={`${toUrlParam(video.name)}`} key={video.id} className='video-link'>
            <GoVideo className='video-icon' />
            <div>
              <h4 style={{marginBottom: "4px"}}>{video.name}</h4>
              <p><i>Video</i></p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default OneTopic;
