import React from 'react';

const BusinessCard = (props) => {
  return (
    <div className="business-card">
      <div className="avatar">
          <img className="avatar__img" alt="avatar" src="https://images.pexels.com/photos/4113084/pexels-photo-4113084.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      </div>
      <div className="profile">
        <h2 className="profile__name u-margin-bottom-small">Wang Xiang Lin</h2>
        <p className="profile__info">@jyun・Front-end developer</p>
      </div>
    </div>
  )
}

export default BusinessCard;