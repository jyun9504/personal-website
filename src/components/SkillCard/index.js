import React from 'react';

const SkillCard = (props) => {
  return (
    <div className="skill-card">
			<div className="skill-card__circle">
				<div className="skill-card__img-box">
					<img className="skill-card__img" alt="Skill" src={ props.icon }/>
				</div>
			</div>
			<div className="skill-content-box">
				<h2 className="skill-content-title">{ props.title }</h2>
				<h2 className="skill-content">{ props.content }</h2>
			</div>
    </div>
  )
}

export default SkillCard;