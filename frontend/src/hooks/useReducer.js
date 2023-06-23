// Reducer function for managing state updates
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
export {reducer};