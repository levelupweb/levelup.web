import React from "react";
import { projects } from '../../db.js'
import ProjectList from '../../components/projectList/ProjectList.js'
import "./projects.css";

const Projects = props => {
	return (
		<div className="page-projects page">
			<div className="block">
				<div className="block-title left" id="prices">
					<h5 className="super title">
						Наши проекты
					</h5>
					<p className="description">Реализованные командой Levelup Web</p>
				</div>
			</div>
			<div className="block">
				<p className="primary">
					На данной странице вы сможете найти проекты, которые мы уже успели реализовать{" "}
					для наших замечательных клиентов
				</p>
			</div>
			<div className="block">
				<ProjectList small={true} projects={projects} />
			</div>
		</div>
	)
}

export default Projects;
