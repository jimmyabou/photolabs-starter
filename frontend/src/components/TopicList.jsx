import React from 'react';

import '../styles/TopicList.scss';
import '../styles/TopicListItem.scss';
import TopicListItem from './TopicListItem';
import { FavIcon } from './FavIcon';
import { FavBadge } from './FavBadge';
const TopicList = (props) => {
  const Array = props.topics.map((item) => {
    return <TopicListItem key={item.id} id={item.id} label={item.title} photosByTopicHandler={props.photosByTopicHandler} />;
  })

  const openFavoriteModal=()=>{
    props.favoritesModalHandler();
  }

  return (
    <div className="top-nav-bar__topic-list">
      {Array}<div onClick={openFavoriteModal} className="topic-list__item"><span>Favorites</span></div>
      {!props.icon ? <span ><FavBadge /></span> : <span className='fav-badge__count ' ><FavBadge />
      </span>}
    </div>);
}
export default TopicList