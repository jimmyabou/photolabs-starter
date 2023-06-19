import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
const HomeRoute = (props) => {  
  return (
    <div className="home-route">
    <TopNavigation topics={props.topicsList} icon={props.icon} photosByTopicHandler={props.photosByTopicHandler}/>
    <PhotoList photos={props.photoList} favoriteIconClick={props.favoriteIconClick} modalHandler={props.modalHandler} displayPhotoHandler={props.displayPhotoHandler}/>
  </div>
);}
export default HomeRoute;

