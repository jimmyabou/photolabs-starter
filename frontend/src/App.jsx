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

const [showModal, setShowModal] = useState(false);
function modalHandler(){
  setShowModal(!showModal)
}

return (
  <>
 {showModal&&<PhotoDetailsModal modalHandler={modalHandler} photoList={photos}/>}
 <div className="App">
<HomeRoute photoList={photos} topicsList={topics} modalHandler={modalHandler}/>
 </div>
</>
);
}
export default App