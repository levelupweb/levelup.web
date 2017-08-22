import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './projects.css';

class Project extends React.Component {
  render() {
    console.log(this.props)
    const { small, project } = this.props;
  	const { id, title, description, image, slug } = project;
    return (
      <div className={small ? "project small" : "project"}>
      	<div className="project-image">
      		<img src={image} alt={title} width="100%" />
      		<div className="image-border"></div>
      		<div className="image-action inverted">
      			<Link to={'/' + slug}>
              <button className="button"><i className="fa fa-angle-right"></i></button>
            </Link>
      		</div>
      	</div>
      	<div className="project-title">
      		<Link to={'/' + slug}>
            <h5 className="super title">{title}</h5>
          </Link>
      		<div className="description">{description}</div>
      	</div>
      </div>
    );
  }
}


Project.propTypes = {
	project: PropTypes.object
}

export default Project;
