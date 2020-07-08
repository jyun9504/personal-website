import React from 'react';

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="project-img-box">
        <img className="project-img" src={ props.img } alt="project" />
      </div>
      <div className="project-content-box">
        <h1 className="project-title">
          { props.title }
        </h1>
        <ul>
          <li className="project-content">
            { props.content }
          </li>
          <li className="project-content">
            <strong>產學合作廠商：</strong>{ props.company }
          </li>
          <li className="project-content">
            { props.contribution }
          </li>
          <li className="project-content">
            <strong>使用技術：{ props.tech }</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;