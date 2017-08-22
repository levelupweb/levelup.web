import React from "react";
import { Link } from 'react-router-dom'
import "./sustav.css";

const Sustav = props => {
	return (
		<div className="page-sustav">
			<section className="fullpage text first">
					<div className="container text">
						<div className="section-content">
							<img src="img/sustav-main.png" width="100%" alt=""/>
						</div>
						<div className="section-title">
							<h4 className="title super">
								<a href="http://sustav.pro">Sustav</a>
							</h4>
							<p className="description">
								<a href="http://sustav.pro" style={{opacity:0.4}}>http://sustav.pro</a>
								</p>
						</div>
						<div className="section-content">
							<p className="primary">Персональный сайт врача травматолога-ортопеда Александра Ветошкина.<br /></p>
						</div>
					</div>
				</section>
				<section className="fullpage text second">
					<div className="container">
						<div className="section-content">
							<div className="row" style={{textAlign: 'left'}}>
								<div className="col-md-6">
									<div className="section-title left">
										<h4 className="title super">
											Вступление
										</h4>
										<p className="description">
											Какие перед нами стояли задачи
										</p>
									</div>
									<p className="primary">
										Перед нами были следующие задачи: ознакомить потенциального пациента{" "} 
										с перечнем проводимых операций, рассказать пациентам о том, как{" "} 
										проходят операции и послеоперационные процессы реабилитации
									</p>
									<p className="primary">
										Также было важно дать возможность пациентам задать вопрос непосредственно самому лечащему{" "}  
										врачу	- Александру Ветошкину
									</p>
								</div>
								<div className="col-md-6 col-xs-12" style={{textAlign: 'right'}}>
									<div className="iphones">
										<img src="img/sustav-iphone.png" className="iphone1" alt="Sustav" width="180px" />
										<img src="img/sustav-iphone1.png" className="iphone2" alt="Sustav" width="200px" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="fullpage third">
					<div className="background">
						<img src="img/wtf.png" className="imac" />
					</div>
					<div className="container">
						<div className="section-content">
							<div className="row">
								<div className="col-md-5">
								</div>
								<div className="col-md-7" style={{textAlign: 'left'}}>
									<div className="section-title left">
										<h4 className="title super">
											Разделы
										</h4>
										<p className="description">
											Список необходимых разделов
										</p>
									</div>
									<p className="primary">
										Список разделов, которые были необходимы для выполнения поставленных целей
									</p>
									<div className="list">
										<div className="item">
											<div className="icon">
												<i style={{opacity:0.4}} className="fa fa-check"></i>
											</div>
											<div className="content">
												Раздел информацией для пациентов - Сустав Wiki
											</div>
										</div>
										<div className="item">
											<div className="icon">
												<i style={{opacity:0.4}} className="fa fa-check"></i>
											</div>
											<div className="content">
												Форум-вопросник - Сустав Forums
											</div>
										</div>
										<div className="item">
											<div className="icon">
												<i style={{opacity:0.4}} className="fa fa-check"></i>
											</div>
											<div className="content">
												Раздел с видео операций
											</div>
										</div>
										<div className="item">
											<div className="icon">
												<i style={{opacity:0.4}} className="fa fa-check"></i>
											</div>
											<div className="content">
												Портфолио
											</div>
										</div>
										<div className="item">
											<div className="icon">
												<i style={{opacity:0.4}} className="fa fa-check"></i>
											</div>
											<div className="content">
												Раздел с отзывами пациентов
											</div>
										</div>
										<div className="item">
											<div className="icon">
												<i style={{opacity:0.4}} className="fa fa-check"></i>
											</div>
											<div className="content">
												Личный блог Александра
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="fullpage fourth">
					<div className="container text">
						<div className="section-title">
							<h5 className="super title">
								Технологии
							</h5>
							<p className="description">
								Технологии, которые мы использовали в проекте
							</p>
						</div>
						<div className="section-content">
							<div className="statistics" style={{marginTop:40 + 'px'}}>
								<div className="statistic" >
									<div className="number">
										<img src="img/mongodb.png" alt="Mongodb"/>
									</div>
									<div className="title">
										Mongodb в качестве сервера баз данных
									</div>
								</div>
								<div className="statistic">
									<div className="number">
										<img src="img/react.png" alt="React"/>
									</div>
									<div className="title">
										React в качестве View-прослойки и UI-генератора
									</div>
								</div>
								<div className="statistic">
									<div className="number">
										<img src="img/graphql.png" alt="GraphQL"/>
									</div>
									<div className="title">
										GraphQL в качестве Model-прослойки
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="fullpage fifth inverted">
					<div className="container">
						<div className="row">
							<div className="col-md-6" style={{textAlign: 'center'}}>
								<div className="section-title">
									<h5 className="title super">
										Хотите заказать себе похожий сайт?
									</h5>
									<p className="description">
										Дайте нам об этом знать!
									</p>
									<button className="button ghost">Связаться</button>
								</div>
							</div>
							<div className="col-md-6" style={{textAlign: 'center'}}>
								<div className="section-title">
									<Link to="/projects">
										<button style={{marginTop:70 +'px'}} className="button ghost">Посмотреть ещё <i className="fa fa-angle-right"></i></button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
		</div>
	)
}

export default Sustav;
