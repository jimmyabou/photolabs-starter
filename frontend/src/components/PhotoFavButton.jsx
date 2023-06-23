import React, { useEffect, useState } from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

function PhotoFavButton(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(props.favoriteArray.find(item => item.id === props.item.id));
  }, [props.favoriteArray, props.id]);

  function handleComponentClick() {
    props.favoriteIconClick(props.item);
  }

  return (
    <div className="photo-list__fav-icon " onClick={handleComponentClick}>
      {!isFavorite ? <span><FavIcon /></span> : <span className="fav-badge"><FavBadge /></span>}
    </div>
  );
}

export default PhotoFavButton;