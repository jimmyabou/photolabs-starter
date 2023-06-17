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
  const [array,setArray]=useState([]);
  const [status,setStatus]=useState(false);
  const [photoObj, setPhotoObj] = useState(null);
  const [arr, setArr] = useState([]);

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
  
  function displayPhotoOnClick(id){ 
    let obj=photos.find(ele=>ele.id===id)
    let sim=(obj.similar_photos);
    let simArray = Object.values(sim);
    setArr(simArray);
    setPhotoObj(obj);
  }
  
  const [showModal, setShowModal] = useState(false);
  function modalHandler(){
    setShowModal(!showModal)
    
  }
  
  return (
    <>
<button onClick={displayPhotoOnClick}>click me</button>
 {showModal&&photoObj&&<PhotoDetailsModal modalHandler={modalHandler} photoList={arr} photo={photoObj} favoriteIconClick={favoriteIconClick}/>}
 <div className="App">
<HomeRoute photoList={photos} topicsList={topics} modalHandler={modalHandler} displayPhotoHandler={displayPhotoOnClick} favoriteIconClick={favoriteIconClick} icon={status}/>
 </div>
</>
);
}
export default App

// onClick={displayPhotoOnClick}

// let photoObj={};
// let arr=[];
// arr= Object.values(sim);
// console.log( arr);
// console.log( obj);
// return obj;