import React from 'react';
import '../styles/PhotoListItem.scss';
import '../styles/PhotoDetailsModal.scss'
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
const regular = `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`;
export const PhotoDetailsModal = (props) => (
  <div className='photo-details-modal'>
    <button className='photo-details-modal__close-button' onClick={props.modalHandler}>
      <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_428_287)">
          <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_428_287">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
    <div className="photo-details-modal__top-bar">
      <PhotoFavButton favoriteIconClick={props.favoriteIconClick} id={props.photo.id} className="" />
      <img src={props.photo.urls.full} className='photo-details-modal__image' />
      <div className='photo-list__user-profile'>
      </div>
      <div className='photo-details-modal__photographer-details '>
        <img src={props.photo.user.profile} className='modal-photo-list__profilePic'></img>
        <div className='ele'>
          {props.photo.user.username}
          <div className='photo-list__user-location'>{props.photo.location.city}, {props.photo.location.country}</div>
        </div>
      </div>
    </div>
    <PhotoList photos={props.photoList} favoriteIconClick={props.favoriteIconClick} />
  </div>
)

export default PhotoDetailsModal;
