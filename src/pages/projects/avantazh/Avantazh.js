import React from "react";
import { Link } from 'react-router-dom'
import "./avantazh.css";

const Avantazh = props => {
	return (
		<div className="page-avantazh blocks">
			<section className="fullpage text first">
					<div className="container text">
						<div className="row">
							<div className="col-xs-12">
								<div className="block">
									<div className="section-content">
										<img src="img/avantazh-main.png" width="100%" alt="Avantazh Expert"/>
									</div>
									<div className="section-title">
										<h4 className="title super">
											<a href="http://avantazh-expert.com" target="_blank">Avantazh</a>
										</h4>
										<p className="description">
											<a href="http://avantazh-expert.com" target="_blank" style={{opacity:0.4}}>http://avantazh.com</a>
											</p>
									</div>
									<div className="section-content">
										<p className="primary">Современные бухгалтерские решения по системе аутсорсинг-услуг<br /></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="fullpage text second">
					<div className="imac">
						<img src="img/avantazh-mockup.png" alt="Avantazh-Expert.com"/>
					</div>
					<div className="container">
						<div className="section-content">
							<div className="row" style={{textAlign: 'left'}}>
								<div className="col-md-3 col-xs-12" style={{textAlign: 'right'}}>
								</div>
								<div className="col-md-9 col-xs-12">
									<div className="block">
										<div className="section-title left">
											<h4 className="title super">
												Вступление
											</h4>
											<p className="description">
												Какие перед нами стояли задачи
											</p>
										</div>
									</div>
									<div className="block">
										<p className="primary">
											Авантаж-Эксперт — это современная, динамично-развивающаяся компания с индивидуальным подходом к каждому клиенту. 
										</p>
									</div>
									<div className="block">
										<p className="primary">
											Именно по этой причине нам было необходимо сделать нечто более свежее, чем то, что обычно показывают нам рядовые бухгалтерские конторы. {" "}
											В качестве основной концепции мы выбрали простоту и минималистичность. Это было также обосновано тем, что вся информация должна быть максимально дружелюбной к пользователю, ведь посещать сайт, переполненный графическим сахаром мало кто захочет.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="fullpage third">
					<div className="background">
						<img src="img/avantazh-imac-1.png" className="imac" alt="Avantazh-Export" />
					</div>
					<div className="container">
						<div className="section-content">
							<div className="row">
								<div className="col-md-6 col-xs-12" style={{textAlign: 'left'}}>
									<div className="block">
										<div className="section-title left">
											<h4 className="title super">
												Разделы
											</h4>
											<p className="description">
												Список необходимых разделов
											</p>
										</div>
									</div>
									<div className="block">
										<p className="primary">
											Список разделов, которые были необходимы для выполнения поставленных целей
										</p>
									</div>
									<div className="block">
										<div className="list">
											<div className="item">
												<div className="icon">
													<i style={{opacity:0.4}} className="fa fa-check"></i>
												</div>
												<div className="content">
													Информационный раздел со статьями
												</div>
											</div>
											<div className="item">
												<div className="icon">
													<i style={{opacity:0.4}} className="fa fa-check"></i>
												</div>
												<div className="content">
													Фирменный блог
												</div>
											</div>
											<div className="item">
												<div className="icon">
													<i style={{opacity:0.4}} className="fa fa-check"></i>
												</div>
												<div className="content">
													Онлайн-калькулятор
												</div>
											</div>
											<div className="item">
												<div className="icon">
													<i style={{opacity:0.4}} className="fa fa-check"></i>
												</div>
												<div className="content">
													Почтовая рассылка
												</div>
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
						<div className="row">
							<div className="col-xs-12">
								<div className="block">
								<div className="section-title">
									<h4 className="super title">
										Технологии
									</h4>
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
												<img src="img/redux.png" alt="Redux"/>
											</div>
											<div className="title">
												Redux в качестве менеджера состояний приложения
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
												<img src="img/rest.png" alt="Express"/>
											</div>
											<div className="title">
												Express в качестве REST API сервера
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
									<button style={{marginTop:20+ 'px'}} className="button">
										<Link to="/contact">Связаться</Link>
									</button>
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

export default Avantazh;
