import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project.js';
import './projects.css';

const renderProjects = (projects, isSmall) => 
	projects.map((project, i) => 
		<Project small={isSmall} project={project} key={i} />
	)

const ProjectList = props => 
	<div className="projects">
		{renderProjects(props.projects, props.small)}
	</div>


ProjectList.propTypes = {
	preview: PropTypes.bool,
	projects: PropTypes.array
}

export default ProjectList
