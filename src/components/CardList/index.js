import React from 'react';

function CardList(props) {
  return (
    <div className="card-list">
			{ props.children }
      <div className="filling-empty-space-child"></div>
    </div>
  );
}

export default CardList;
