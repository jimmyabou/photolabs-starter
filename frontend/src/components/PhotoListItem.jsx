
import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';
const PhotoListItem = (props) => {
  function displayPhoto() {
    props.displayPhotoHandler(props.id);
    props.modalHandler();
  }
  return (
    <div className='photo-list__item'>
      <PhotoFavButton favoriteIconClick={props.favoriteIconClick} id={props.id} item={props.item} favoriteArray={props.favoriteArray}/>
      <img src={props.imageSource} className="photo-list__image " onClick={displayPhoto} />
      <div className='photo-list__user-profile'>
        <div className='photo-list__user-details'>
          <img src={props.item.user.profile} className='photo-list__profilePic'></img>
          <div className='photo-list__user-info'>
            {props.item.user.username}
            <div className='photo-list__user-location'>{props.item.location.city}, {props.item.location.country}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PhotoListItem;