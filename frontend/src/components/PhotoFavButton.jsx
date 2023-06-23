import React, { useEffect, useState } from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

function PhotoFavButton(props) {
// State to track whether the photo is favorited or not by using it as a conditional in the ternary operator to 
//render the FavIcon component (photo is not a favorite) or FavBadge component (photo is a favorite)
  const [isFavorite, setIsFavorite] = useState(false);

  // useEffect hook to update the isFavorite state based on favoriteArray changes
  useEffect(() => {
    setIsFavorite(props.favoriteArray.find(item => item.id === props.item.id));
  }, [props.favoriteArray, props.id]);

  // Click event handler for the component
  function handleComponentClick() {
    props.favoriteIconClick(props.item);
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleComponentClick}>
      {!isFavorite ? <span><FavIcon /></span> : <span className="fav-badge"><FavBadge /></span>}
    </div>
  );
}

export default PhotoFavButton;