import React from "react";
import { Link } from 'react-router-dom'
import ScrollReveal from 'scrollreveal';
import ProjectList from '../../components/projectList/ProjectList.js';
import { projects } from '../../db.js';
import "./index.css";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
		initScrollReveal()
  }

  render() {
    return (
			<div>
				<section className="fullpage center first blocks">
					<div className="background">
						<img src="/img/intro-1.png" className="ipad" alt="" />
						<img src="/img/intro-2.png" className="iphone" alt="" />
					</div>
					<div className="container text" style={{height: 229 + 'px'}}>
						<div className="jumbotron">
							<div className="block">
							<div className="jumbotron-title">
								<h3 className="super title">
									<img src="/img/logo-web.png" />
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
				<section className="fullpage text second">
					<div className="container">
						<div className="section-content">
							<ProjectList preview={true} projects={projects} />
						</div>
						<div className="section-actions">
							<span className="button"><Link to="/projects">Все проекты</Link></span>
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
	sr.reveal(".ipad", {
		duration: 1000,
		delay: 0,
		origin: "bottom"
	});
	sr.reveal(".iphone", {
		duration: 1000,
		delay: 0,
		origin: "right"
	});
	sr.reveal(".projects .project", {
		duration: 1000,
		delay: 600,
		origin: "top"
	}, 100);
};

export default Index;