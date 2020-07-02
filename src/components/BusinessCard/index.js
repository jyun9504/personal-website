import React from 'react';

import LinkGroup from '../LinkGroup';
import ImgAvatar from '../../assets/images/avatar1.png';

const BusinessCard = (props) => {
  return (
    <div className="business-card">
      <div className="avatar">
        <img className="avatar__img" alt="avatar" src={ ImgAvatar } />
      </div>
      <div className="profile">
        <h2 className="profile__name">王翔麟</h2>
        <h2 className="profile__name">Wang Xiang Lin</h2>
        <p className="profile__info">@jyun・Front-end developer</p>
      </div>
      <LinkGroup />
    </div>
  )
}

export default BusinessCard;