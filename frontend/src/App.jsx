import React from 'react';
import './App.scss';
import './styles/PhotoList.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
const App = () => {
  const {
    status,
    photoObj,
    arr,
    photos,
    topics,
    showModal,
    favoriteIconClick,
    displayPhotoOnClick,
    modalHandler,
    photosByTopicHandler,
  } = useApplicationData();
  return (
    <>
      {showModal && photoObj && <PhotoDetailsModal modalHandler={modalHandler} photoList={arr} photo={photoObj} favoriteIconClick={favoriteIconClick} />}
      <div className="App">
        <HomeRoute photoList={photos} topicsList={topics} modalHandler={modalHandler} displayPhotoHandler={displayPhotoOnClick} favoriteIconClick={favoriteIconClick} icon={status} photosByTopicHandler={photosByTopicHandler} />
      </div>
    </>
  );
}
export default App

