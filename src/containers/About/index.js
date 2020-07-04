import React from 'react';
import Collapse from '../../components/Collapse';


function About() {
  return (
    <div className="about">
      <h1 className="heading-primary">關於我</h1>
      <p className="about__content u-margin-bottom-small">
        畢業於 <strong>國立臺中科技大學 資訊工程系</strong><br />
        在校期間參與指導教授創辦的 <strong>I・M・A・C</strong> 社群，擔任 <strong>Web Team</strong> 的 <strong>前端工程師</strong><br />
        平時除了學習專業技能之外，主要在做產學合作專案的開發，<br/>
        對網頁前端有熱忱，有兩年以上的前端專案與學習經歷。
      </p>
      <Collapse
        title = '專業能力'
      >
        1234
      </Collapse>
    </div>
  );
}

export default About;
