import React from 'react';
import '../styles/TopicListItem.scss'
const TopicListItem = (props) => {
  const fetchPhotosByTopic = () => {
    props.photosByTopicHandler(props.id);
  };
  return (<div className="topic-list__item">
    <span onClick={fetchPhotosByTopic}>{props.label}</span>
  </div>);
}
export default TopicListItem