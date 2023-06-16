import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';
import { FavIcon } from './FavIcon';
const TopicList = (props) => {


  const Array=props.topics.map((item)=>{
    return <TopicListItem key={item.id} label={item.title}/>;
  })

  return (
  <div className="top-nav-bar__topic-list">
    {/* Insert React */}
    
    {Array}
    {props.icon&&<span className='topic-list__item'><FavIcon fill={"#C80000"} />
    </span>}
  </div>);
}

// TopicList.defaultProps = {
//   topics: [
//     {
//       "id": "1",
//       "slug": "topic-1",
//       "title": "Nature"
//     },  
//     {
//       "id": "2",
//       "slug": "topic-2",
//       "title": "Travel"
//     },
//     {
//       "id": "3",
//       "slug": "topic-3",
//       "title": "People"
//     },
//   ]
// }
export default TopicList