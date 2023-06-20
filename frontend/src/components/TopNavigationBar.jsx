import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} favorites={props.favorites} icon={props.icon} photosByTopicHandler={props.photosByTopicHandler} favoritesModalHandler={props.favoritesModalHandler}/>
    </div>
  )
}
export default TopNavigation;