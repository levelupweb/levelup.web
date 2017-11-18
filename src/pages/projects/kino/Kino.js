import React from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import "./kino.css";

const Kino = props => {
  return (
    <div className="page-kino blocks">
      <Helmet>
        <title>Проект "Кострома Фильм"</title>
        <meta name="description" content="Кейс к проекту Кострома Фильм. Студия веб-разработок Levelup Web" />
        <meta name="keywords" content="Кострома фильм, кино в костроме, киностудия в Костроме, разработка приложений, купить сайт, создать сайт в студии под ключ, сайт под ключ купить" />
        <meta name="author" content="Levelup Web" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Levelup Web" />
        <meta property="og:title" content="Проект 'Кострома Фильм'" />
        <meta property="og:description" content="Кейс к проекту Кострома Фильм. Студия веб-разработок" />
        <meta property="og:url" content="http://web.levelupworlds.com/kino" />
      </Helmet>
      <section className="fullpage text first">
        <div className="container text">
          <div className="row">
            <div className="col-xs-12">
              <div className="block">
                <div className="section-content">
                  <img style={{ margin: "20px 0" }} src="./dist/img/kino.png" width="100%" alt="Кострома Фильм" />
                </div>
                <div className="section-title">
                  <h4 className="title super">
                    <a href="http://kostromafilm.ru/" target="_blank">Кострома Фильм</a>
                  </h4>
                  <p className="description">
                    <a href="http://kostromafilm.ru/" target="_blank" style={{ opacity: 0.4 }}>http://kostromafilm.ru/</a>
                  </p>
                </div>
                <div className="section-content">
                  <p className="primary">Кинокомпания «Кострома Фильм»
Создана при поддержке администрации города Костромы и братьев Алексея и Романа Курцын<br /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fullpage fifth">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12" style={{ textAlign: 'center' }}>
              <div className="block">
                <div className="section-title">
                  <h5 className="title super">
                    Хотите заказать себе похожий сайт?
									</h5>
                  <Link to="/contact">
                    <button style={{ marginTop: 20 + 'px' }} className="button">
                      <span style={{ color: '#fff!important' }}>Написать нам</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12" style={{ textAlign: 'center' }}>
              <div className="block">
                <div className="section-title">
                  <p className="description">
                    Или посмотрите ещё работы из нашего портфолио
									</p>
                  <Link to="/projects">
                    <button style={{ marginTop: 20 + 'px' }} className="button">Посмотреть ещё <i className="fa fa-angle-right"></i></button>
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

export default Kino;
