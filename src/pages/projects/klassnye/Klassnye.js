import React from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import "./klassnye.css";

const Klassnye = props => {
	return (
		<div className="page-klassnye blocks">
			<Helmet>
        <title>Проект "Levelup Klassnye"</title>
        <meta name="description" content="Кейс к проекту Klassnye.com - полуфабрикатные продукты из Костромы" />
    		<meta name="keywords" content="классные пельмени, полуфабрикаты, Кострома" />
    		<meta name="author" content="Levelup Web" />
  			<meta name="robots" content="index, follow" />
  			<meta name="revisit-after" content="1 days" />
  			<meta property="og:type" content="website" />
  			<meta property="og:site_name" content="Levelup Web" />
  			<meta property="og:title" content="Проект Klassnye.com - Levelup Web Project" />
  			<meta property="og:description" content="Кейс к проекту  Klassnye.com. Студия веб-разработок" />
  			<meta property="og:url" content="http://web.levelupworlds.com/klassnye" />
    	</Helmet>
			<section className="fullpage text first inverted">
					<div className="container">
						<div className="row">
							<div className="col-xs-12">
								<div className="block">
                <div className="section-content">
                  <img style={{ margin: "20px 0" }} src="./dist/img/klassnye-image.png" width="100%" alt="Klassnye.com" />
                </div>
									<div className="section-title ">
										<p className="description">
											<a href="http://klassnye.com" target="_blank" style={{opacity:0.4}}>http://klassnye.com</a>
											</p>
										<h4 className="title super">
											<a href="http://klassnye.com" target="_blank">Klassnye.com</a>
										</h4>
										
									</div>
									<div className="section-content">
										<p className="primary">Производитель полуфабрикатов из Костромы</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				
				<section className="fullpage fourth">
					<div className="container text">
						<div className="row">
							<div className="col-xs-12">
								<div className="block">
								<div className="section-title">
									<h5 className="super title">
										Технологии
									</h5>
									<p className="description">
										Технологии, которые мы использовали в проекте
									</p>
								</div>
								</div>
								<div className="block">
								<div className="section-content">
									<div className="statistics">
										<div className="statistic" >
											<div className="number">
												<img src="dist/img/html5.png" alt="HTML5"/>
											</div>
											<div className="title">
												HTML5 в качестве более качественной семантической разметки
											</div>
										</div>
										<div className="statistic">
											<div className="number">
												<img src="dist/img/react.png" alt="React"/>
											</div>
											<div className="title">
												React в качестве View-прослойки и UI-генератора
											</div>
										</div>
										<div className="statistic">
											<div className="number">
												<img src="dist/img/redux.png" alt="Redux"/>
											</div>
											<div className="title">
												Redux в качестве единого хранилища состояния приложения
											</div>
										</div>
									</div>
								</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="fullpage fifth">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-xs-12" style={{textAlign: 'center'}}>
								<div className="block">
								<div className="section-title">
									<h5 className="title super">
										Хотите заказать себе похожий сайт?
									</h5>
									<Link to="/contact">
										<button style={{marginTop:20+ 'px'}} className="button">
											Написать нам
										</button>
									</Link>
								</div>
								</div>
							</div>
							<div className="col-md-6 col-xs-12" style={{textAlign: 'center'}}>
								<div className="block">
								<div className="section-title">
									<p className="description">
										Или посмотрите ещё работы из нашего портфолио
									</p>
									<Link to="/projects">
										<button style={{marginTop:20+ 'px'}} className="button">Посмотреть ещё <i className="fa fa-angle-right"></i></button>
									</Link>
								</div>
								</div>
							</div>
						</div>
					</div>
				</section>
		</div>
	)
}

export default Klassnye;
