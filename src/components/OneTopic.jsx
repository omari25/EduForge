import React from 'react'
import { Link, useParams } from 'react-router-dom';
import toUrlParam from './toUrlParam';

function OneTopic({courses}) {

  const { courseTopic } = useParams();
  const topics = courses.length > 0 ? courses[0].topics : [];
  const selectedTopic = topics.find(topic => toUrlParam(topic.name) === courseTopic);

  return (
    <div className='topic-resources-div'>
        <div></div>
        <div className='videos-list-div' >
          <div className='videos-list-div-title'>
            <h2>{selectedTopic.name}</h2>
            <p>{selectedTopic.description}</p>
          </div>
        </div>
    </div>
  )
}

export default OneTopic