import React from 'react';
import './App.scss';
import './styles/PhotoList.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import FavoritesModal from './routes/FavoritesModal';

const App = () => {
  const {
    array,
    showFavorites,
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
    favoritesModalHandler
  } = useApplicationData();
  return (
    <>
    {showFavorites&&<FavoritesModal favoritesModalHandler={favoritesModalHandler} favArray={array} favoriteArray={array}/>}
      {showModal && photoObj && <PhotoDetailsModal modalHandler={modalHandler} photoList={arr} photo={photoObj} favoriteIconClick={favoriteIconClick} favoriteArray={array}/>}
      <div className="App">
        <HomeRoute photoList={photos} topicsList={topics} modalHandler={modalHandler} displayPhotoHandler={displayPhotoOnClick} favoriteIconClick={favoriteIconClick} icon={status} photosByTopicHandler={photosByTopicHandler} favoritesModalHandler={favoritesModalHandler} favoriteArray={array}/>
      </div>
    </>
  );
}
export default App

