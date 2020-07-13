import React from 'react';
import Collapse from '../../components/Collapse';
import CardList from '../../components/CardList';
import ProjectList from '../../components/ProjectList';
import Paper from '../../components/Paper';
import SkillCard from '../../components/SkillCard'
import SkillCards from './SkillCardsData';

function About() {
  return (
    <div className="about">
      <Paper>
        <h1 className="heading-primary">關於我</h1>
        <p className="about__content u-margin-bottom-small">
          畢業於 <strong>國立臺中科技大學 資訊工程系</strong><br />
          在校期間參與指導教授創辦的 <strong>I・M・A・C</strong> 社群，擔任 <strong>Web Team</strong> 的 <strong>前端工程師</strong><br />
          平時除了學習專業技能之外，主要在做產學合作專案的開發，<br/>
          對網頁前端有熱忱，有<strong>兩年</strong>以上的前端專案與學習經歷。
        </p>
        <Collapse
          title = '專業能力'
        >
          <CardList>
            { 
              SkillCards.map(card => {
                return (
                  <SkillCard
                    icon={ card.icon } 
                    title={ card.title } 
                    content={ card.content } 
                    key={ card.title }
                  />
                )
              }) 
            }
          </CardList>
        </Collapse>
        <Collapse
          title = '專案經驗'
        >
          <ProjectList />
        </Collapse>
      </Paper>
    </div>
  );
}

export default About;
