import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './styles.css';

const Project = ({
  small,
  project: {
    id, 
    title, 
    description, 
    image, 
    slug,
    link
  }
}) => (
  <div className={small ? "project small" : "project"}>
    <div className="project-image">
      <img src={image} alt={title} width="100%" />
      <div className="image-border"></div>
      <div className="image-action inverted">
        <Link to={link} target="_blank">
          <button className="button">
            <i className="fa fa-angle-right"></i>
          </button>
        </Link>
      </div>
    </div>
    <div className="project-title">
      <Link to={link} target="_blank">
        <h5 className="super title">{title}</h5>
      </Link>
      <div className="description">{description}</div>
    </div>
  </div>
);


Project.propTypes = {
	project: PropTypes.object
}

export default Project;
