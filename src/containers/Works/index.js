import React from 'react';
import Paper from '../../components/Paper';
import CardList from '../../components/CardList';
import WorksCard from '../../components/WorksCard';
import WorksCards from './WorksCardsData';

function Works() {
  return (
    <div className="works">
      <Paper>
        <CardList>
          { 
            WorksCards.map(card => {
              return (
                <WorksCard
                  img={ card.img } 
                  title={ card.title } 
                  content={ card.content } 
                  src={ card.src }
                  key={ card.title }
                />
              )
            }) 
          }
        </CardList>
      </Paper>
    </div>
  );
}

export default Works;
