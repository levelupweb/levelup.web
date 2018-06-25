import React from "react";
import { projects } from '../../db'
import ProjectList from '../../components/ProjectList'
import { Helmet } from "react-helmet";
import "./styles.css";

const Projects = props => {
	return (
		<div className="page-projects">
			<Helmet>
        <title>Проекты - Levelup Web</title>
        <meta name="description" content="Кейсы к выполненным проектам. Студия веб-разработок Levelup Web" />
    		<meta name="keywords" content="веб-разработка, веб агентство, создать веб-приложение, разработка приложений, купить сайт, создать сайт в студии под ключ, сайт под ключ купить" />
    		<meta name="author" content="Levelup Web" />
  			<meta name="robots" content="index, follow" />
  			<meta name="revisit-after" content="1 days" />
  			<meta property="og:type" content="website" />
  			<meta property="og:site_name" content="Levelup Web" />
  			<meta property="og:title" content="Проекты - Levelup Web Project" />
  			<meta property="og:description" content="Наши проекты. Студия веб-разработок" />
  			<meta property="og:url" content="https://web.levelupworlds.com/projects" />
    	</Helmet>
			<div className="block">
				<div className="block-title left" id="projects">
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
