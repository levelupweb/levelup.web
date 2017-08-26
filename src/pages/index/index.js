import React from "react";
import { Link } from 'react-router-dom'
import ProjectList from '../../components/projectList/ProjectList.js';
import { projects } from '../../db.js';
import { Helmet } from "react-helmet";
import "./index.css";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  	var ScrollReveal = require('scrollreveal');
		initScrollReveal()
  }

  render() {
    return (
			<div>
				<Helmet>
        	<title>Levelup Web Project - веб-студия</title>
        	<meta name="description" content="Levelup Web - веб-разработка, разработка мобильных приложений, разработка сайтов" />
    			<meta name="keywords" content="веб-разработка, веб агентство, создать веб-приложение, разработка приложений, купить сайт, создать сайт в студии под ключ, сайт под ключ купить" />
    			<meta name="author" content="Levelup Web" />
    			<meta name="robots" content="index, follow" />
    			<meta name="revisit-after" content="1 days" />
    			<meta property="og:type" content="website" />
    			<meta property="og:site_name" content="Levelup Web" />
    			<meta property="og:title" content="Levelup Web Project" />
    			<meta property="og:description" content="Levelup Web - студия полного цикла. Студия веб-разработок" />
    			<meta property="og:url" content="http://web.levelupworlds.com/" />
    		</Helmet>
				<section className="fullpage center first blocks">
					<div className="background">
						<img src="./dist/img/intro-1.png" className="ipad" alt="" />
						<img src="./dist/img/intro-2.png" className="iphone" alt="" />
					</div>
					<div className="container text" style={{height: 229 + 'px'}}>
						<div className="jumbotron">
							<div className="block">
							<div className="jumbotron-title">
								<h3 className="super title">
									<img src="./dist/img/logo-web.png" />
									Levelup Web
								</h3>
							</div>
							<div className="jumbotron-content">
								<p className="primary">
									Мы создаём то, что облегачает общение между клиентом и бизнесом. Мы создаём приложения самых разных уровней сложности: от простых продающих страниц до высоконагруженных веб-платформ. 
								</p>
							</div>
							</div>
						</div>
					</div>
				</section>
				<section className="fullpage text second blocks">
					<div className="container">
						<div className="section-title ">
							<div className="block">
								<h5 className="title super" style={{fontWeight: 100}}>Наши проекты</h5>
							</div>
						</div>
						<div className="section-content">
							<div className="block">
								<ProjectList preview={true} projects={projects} />
							</div>
						</div>
						<div className="section-actions" style={{marginTop:0}}>
							<div className="block">
								<span style={{display: 'inline'}} className="button"><Link to="/projects">Все проекты</Link></span>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
  }
}


const initScrollReveal = () => {
	var sr = ScrollReveal();
	sr.reveal(".jumbotron .jumbotron-title", {
		duration: 500,
		delay: 100,
		origin: "top"
	});
	sr.reveal(".jumbotron .jumbotron-content", {
		duration: 500,
		delay: 200,
		origin: "top"
	});
	sr.reveal(".projects .project", {
		duration: 1000,
		delay: 600,
		origin: "top"
	}, 100);
};

export default Index;