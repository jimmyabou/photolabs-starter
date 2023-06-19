import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';
const PhotoList = (props) => {
  const array = props.photos.map((item) => {
    return <PhotoListItem key={item.id}
      id={item.id}
      imageSource={item.urls.regular}
      favoriteIconClick={props.favoriteIconClick}
      color={props.color}
      modalHandler={props.modalHandler}
      displayPhotoHandler={props.displayPhotoHandler}
      item={item} />;
  });
  return (<ul className="photo-list">
    {array}
  </ul>);
}
export default PhotoList

