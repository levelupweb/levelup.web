import React from "react";
import "./about.css";

const About = props => {
	return (
		<div className="page-about page">
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
							<img src="img/development-icons.png" alt="Разработка мобильных приложений"/>
						</div>
						<div className="title">
							Разработка мобильных приложений
						</div>
					</div>
					<div className="statistic">
						<div className="number">
							<img src="img/laptop.png" alt="Разработка сайтов и интернет-магазинов"/>
						</div>
						<div className="title">
							Разработка сайтов и интернет-магазинов
						</div>
					</div>
					<div className="statistic">
						<div className="number">
							<img src="img/cloud-computing.png" alt="Разработка облачных решений"/>
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
				<a href="http://levelupworlds.com/#/page/career" className="button">Вакансии <i className="fa fa-external-link"></i></a>
			</div>
		</div>
	)
}

export default About;
