import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';
function PhotoFavButton(props) {
  const [color,setColor]=useState("");
  function handlecomponenetClick(){
    {color===""&&setColor("#C80000")}
    {color==="#C80000"&&setColor("")};
    {props.favoriteIconClick(props.id)}
    // console.log(props.id);  
}
  
  return (
    <div className="photo-list__fav-icon " onClick={handlecomponenetClick}>
      <FavIcon fill={color} width={35} height={35}/>
    </div>

  );
}

export default PhotoFavButton;

// <div className="photo-list__fav-icon-svg">
        
       
// </div>
// fill= {color}