import React from 'react';
import SkillCard from '../SkillCard';
import SkillCards from './SkillCardsData'; 


function CardList() {
  return (
    <div className="card-list">
			{ 
				SkillCards.map(card => {
					return (
						<SkillCard
							icon={ card.icon } 
							title={ card.title } 
							content={ card.content } 
						/>
					)
				}) 
			}
      <div className="filling-empty-space-child"></div>
    </div>
  );
}

export default CardList;
