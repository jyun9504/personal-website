import React from 'react';
import GifLoading from '../../assets/images/91.gif';

function LoadingCard() {
  return (
    <div className="loading-card"><img class="loading-gif" src={ GifLoading } alt=""loading/></div>
  );
}

export default LoadingCard;
