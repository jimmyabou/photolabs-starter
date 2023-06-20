import { useState, useEffect, useReducer } from 'react';
const reducer = (state, { type, value }) => {
  return {
    ...state,
    array: type === 'SET_ARRAY' ? value : state.array,
    status: type === 'SET_STATUS' ? value : state.status,
    showModal: type === 'SET_SHOW_MODAL' ? value : state.showModal,
    showFavorites: type === 'SET_SHOW_FAVORITES' ? value : state.showFavorites,
    photoObj: type === 'SET_PHOTO_OBJ' ? value : state.photoObj,
    arr: type === 'SET_ARR' ? value : state.arr,
    topicId: type === 'SET_TOPIC_ID' ? value : state.topicId
  };
};
const useApplicationData = () => {
  const initialState = {
    array: [],
    status: false,
    showModal: false,
    photoObj: null,
    arr: [],
    topicId: null,
    showFavorites:false
  };
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
      }).catch(error => {
        console.error(error);
      });
    fetch('http://localhost:8001/api/topics')
      .then((res) => res.json())
      .then((data) => {
        setTopics(data);
      }).catch(error => {
        console.error(error);
      });
  }, []);


  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (state.topicId) {
      fetch(`http://localhost:8001/api/topics/photos/${state.topicId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(state.topicId, data);
        }).catch(error => {
          console.error(error);
        });
    }
  }, [state.topicId]);

  const photosByTopicHandler = (newTopicId) => {
    dispatch({ type: 'SET_TOPIC_ID', value: newTopicId });
  }
  const favoriteIconClick = (id) => {
    const updatedArray = state.array.find((ele) => ele === id)
      ? state.array.filter((ele) => ele !== id)
      : [id, ...state.array];

    console.log(updatedArray);

    dispatch({
      type: 'SET_ARRAY',
      value: updatedArray,
    });
  };
  const displayPhotoOnClick = (id) => {
    let obj = photos.find(ele => ele.id === id);
    let sim = obj.similar_photos;
    let simArray = Object.values(sim);
    dispatch({ type: 'SET_ARR', value: simArray });
    dispatch({ type: 'SET_PHOTO_OBJ', value: obj });
  };
  const modalHandler = () => {
    dispatch({ type: 'SET_SHOW_MODAL', value: !state.showModal });
    // console.log(state.showModal);
  };


  const favoritesModalHandler = () => {
    dispatch({ type: 'SET_SHOW_FAVORITES', value: !state.showFavorites });
    // console.log(state.showFavorites);
  };


  useEffect(() => {
  }, [state.array]);
  useEffect(() => {
    dispatch({ type: 'SET_STATUS', value: state.array.length > 0 });
  }, [state.array]);

  return {
    ...state,
    photos,
    topics,
    photosByTopicHandler,
    favoriteIconClick,
    displayPhotoOnClick,
    modalHandler,
    favoritesModalHandler
  };
};

export default useApplicationData;
