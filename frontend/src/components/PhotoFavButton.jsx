import React, { useCallback, useState } from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';
function PhotoFavButton(props) {
  const [color, setColor] = useState(false);
  function handlecomponenetClick() {
    setColor(!color)
    { props.favoriteIconClick(props.item) }
  }
 
  return (
    <div className="photo-list__fav-icon " onClick={handlecomponenetClick}>
      {!color ? <span><FavIcon /></span> : <span className="fav-badge" ><FavBadge /></span>}
    </div>
  );
}
export default PhotoFavButton;
