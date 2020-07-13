import React from 'react';

const WorksCard = (props) => {
  return (
    <div className="works-card">
      <a href={ props.src }>
			  <img className="works-img" src={ props.img } alt="works"/>
        <div className="works-content-block">
          <h2 className="works-title">{ props.title }</h2>
          <p className="works-content">{ props.content }</p>
        </div>
      </a>
      
    </div>
  )
}

export default WorksCard;