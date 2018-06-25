import React from "react";
import { Helmet } from "react-helmet";
import "./styles.css";

const About = props => {
	return (
		<div className="page-about">
			<Helmet>
        <title>О нас - Levelup Web</title>
        <meta name="description" content="О компании Levelup Web. Студия веб-разработок" />
    		<meta name="keywords" content="веб-разработка, веб агентство, создать веб-приложение, разработка приложений, купить сайт, создать сайт в студии под ключ, сайт под ключ купить" />
    		<meta name="author" content="Levelup Web" />
  			<meta name="robots" content="index, follow" />
  			<meta name="revisit-after" content="1 days" />
  			<meta property="og:type" content="website" />
    		<meta property="og:site_name" content="Levelup Web" />
    		<meta property="og:title" content="О нас - Levelup Web Project" />
    		<meta property="og:description" content="О компании Levelup Web. Студия веб-разработок" />
    		<meta property="og:url" content="https://web.levelupworlds.com/about" />
    	</Helmet>
			<div className="block">
				<div className="block-title left" id="about-us">
					<h5 className="super title">
						О команде Levelup Web
					</h5>
					<p className="description">Кто мы такие и чем занимаемся?</p>
				</div>
			</div>
			<div className="block">
				<p className="primary">
					Наша команда разрабатывает готовые решения для вашего бизнеса.{" "}
					Мы занимаемся разработкой сайтов, мобильных приложений, веб-платформ, а также{" "}
					автоматизированием систем.
				</p>
			</div>
			<div className="block">
				<div className="statistics">
					<div className="statistic">
						<div className="number">
							<img src="dist/img/development-icons.png" alt="Разработка мобильных приложений"/>
						</div>
						<div className="title">
							Разработка мобильных приложений
						</div>
					</div>
					<div className="statistic">
						<div className="number">
							<img src="dist/img/laptop.png" alt="Разработка сайтов и интернет-магазинов"/>
						</div>
						<div className="title">
							Разработка сайтов и интернет-магазинов
						</div>
					</div>
					<div className="statistic">
						<div className="number">
							<img src="dist/img/cloud-computing.png" alt="Разработка облачных решений"/>
						</div>
						<div className="title">
							Разработка облачных решений
						</div>
					</div>
				</div>
			</div>
			<div className="block">
				<p className="primary">
					На данный момент наша команда уже реализовала более 50 проектов{" "}
					самых разных сложностей: от реализации простых продажных страниц и до{" "}
					полномасштабной автоматизации бизнес-процессов в одной из крупнейших компаний.
				</p>
			</div>
			<div className="block">
				<p className="primary">
					А ещё наша команда находится в постоянном поиске талантов! Об открытых всех вакансиях{" "}
					вы можете узнать, кликнув на кнопку ниже
				</p>
			</div>
			<div className="block">
				<a href="https://levelupworlds.com/career" className="button">Вакансии <i className="fa fa-external-link"></i></a>
			</div>
		</div>
	)
}

export default About;
