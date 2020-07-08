import React from 'react';
import ProjectCard from '../ProjectCard';
import ProjectsData from './ProjectsData';

function ProjectList() {
  return (
    <div className="project-list">
      { 
				ProjectsData.map(data => {
					return (
						<ProjectCard
							img={ data.img } 
							title={ data.title } 
							content={ data.content } 
              company={ data.company } 
              contribution={ data.contribution } 
              tech={ data.tech } 
							key={ data.title }
						/>
					)
				}) 
			}
    </div>
  );
}

export default ProjectList;
