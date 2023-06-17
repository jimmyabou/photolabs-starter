import React from 'react';
import { useState, useEffect } from 'react';
// import TopicListItem from './components/TopicListItem';
import './App.scss';
import './styles/PhotoList.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos.js';
import topics from './mocks/topics.js';
// const photos = [1,2,4];
// const photosArray=photos.map(( index)=>{
// return <PhotoListItem key={index}/>;
// })
// Note: Rendering a single component to build components in isolation

const App = () => {

  const [photoObj, setPhotoObj] = useState(null);
  const [arr, setArr] = useState([]);
  // let photoObj={};
  // let arr=[];
  function displayPhotoOnClick(id){
    
    let obj=photos.find(ele=>ele.id===id)
    let sim=(obj.similar_photos);
    let simArray = Object.values(sim);
    // arr= Object.values(sim);
    setArr(simArray);
    // console.log( arr);
    setPhotoObj(obj);
    // console.log( obj);
    // return obj;
  }
  
  // photoObj=displayPhotoOnClick();
  
  const [showModal, setShowModal] = useState(false);
  function modalHandler(){
    setShowModal(!showModal)

  }
  
  return (
    <>
<button onClick={displayPhotoOnClick}>click me</button>
 {showModal&&photoObj&&<PhotoDetailsModal modalHandler={modalHandler} photoList={arr} photo={photoObj} />}
 <div className="App">
<HomeRoute photoList={photos} topicsList={topics} modalHandler={modalHandler} displayPhotoHandler={displayPhotoOnClick}/>
 </div>
</>
);
}
export default App

// onClick={displayPhotoOnClick}
