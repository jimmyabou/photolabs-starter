import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
const HomeRoute = (props) => {

  //removed the state up
  
  return (
    <div className="home-route">
    {/* Insert React */}
    <TopNavigation topics={props.topicsList} icon={props.icon}/>
    <PhotoList photos={props.photoList} favoriteIconClick={props.favoriteIconClick} modalHandler={props.modalHandler} displayPhotoHandler={props.displayPhotoHandler}/>
  </div>
);}
export default HomeRoute;

//  function favoriteIconClick(id){
//   const newArray = array.filter(ele => ele !== id);
//   array.find(ele => ele === id) ? setArray(newArray) : setArray([id, ...array]); 
//   array.length>0?setStatus(true):setStatus(false);
//  console.log(array);
//  console.log(status);
// };