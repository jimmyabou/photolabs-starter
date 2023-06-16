
import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  return (
    <div className='photo-list__item'>
      <PhotoFavButton favoriteIconClick={props.favoriteIconClick} id={props.id}/>
      <img src={props.imageSource} className="photo-list__image " onClick={props.modalHandler}/>
    </div>
  );
}

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
}

export default PhotoListItem;

{/* <p>photographer username : {props.username}</p>
<p>photographer profile : {props.profile}</p>
<p>location: province: {props.location.montreal}country:{props.location.country}</p> */}