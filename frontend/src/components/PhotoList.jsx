import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  // const arrayt=[1,2,3];
  // console.log(props.photos);
  const array= props.photos.map((item)=>{
    // console.log(item);
    return <PhotoListItem key={item.id} id={item.id} imageSource={item.urls.regular} favoriteIconClick={props.favoriteIconClick} color={props.color} modalHandler={props.modalHandler}/>;
  });
  return (<ul className="photo-list">
    {array}
  </ul>);
}

// PhotoList.defaultProps = {
//   photos: [
//     {
//       "id": "1",
//       "location": {
//         "city": "Montreal",
//         "country": "Canada"
//       },
//       "urls": {
//         "full": `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
//         "regular": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`
//       },
//       "user": {
//         "id": "1",
//         "username": "exampleuser",
//         "name": "Joe Example",
//         "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
//       }
//     },
//     {
//       "id": "2",
//       "location": {
//         "city": "Toronto",
//         "country": "Canada"
//       },
//       "urls": {
//         "full": `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
//         "regular": `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`
//       },
//       "user": {
//         "id": "2",
//         "username": "exampleuser",
//         "name": "Joe Example",
//         "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
//       }
//     },
//     {
//       "id": "3",
//       "location": {
//         "city": "Ottawa",
//         "country": "Canada"
//       },
//       "urls": {
//         "full": `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
//         "regular": `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`
//       },
//       "user": {
//         "id": "3",
//         "username": "exampleuser",
//         "name": "Joe Example",
//         "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
//       }
//     }
//    ]
// }

export default PhotoList

// imageSource={item.url.full}