import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
const HomeRoute = (props) => {

  const [array,setArray]=useState([]);
  const [status,setStatus]=useState(false);

//  function favoriteIconClick(id){
//   const newArray = array.filter(ele => ele !== id);
//   array.find(ele => ele === id) ? setArray(newArray) : setArray([id, ...array]); 
//   array.length>0?setStatus(true):setStatus(false);
//  console.log(array);
//  console.log(status);
// };

useEffect(() => {
  setStatus(array.length > 0);
  console.log(array);
}, [array]);

const favoriteIconClick = (id) => {
  setArray(prevArray => {
    const newArray = prevArray.filter(ele => ele !== id);
    return prevArray.find(ele => ele === id) ? newArray : [id, ...prevArray];
  });
  
};


  return (
  <div className="home-route">
    {/* Insert React */}
    <TopNavigation topics={props.topicsList} icon={status}/>
    <PhotoList photos={props.photoList} favoriteIconClick={favoriteIconClick} modalHandler={props.modalHandler} displayPhotoHandler={props.displayPhotoHandler}/>
  </div>
);}
export default HomeRoute;