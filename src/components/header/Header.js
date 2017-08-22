import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = props => 
	<div className="header">
		<nav className="navigation">
			<ul>
				<Link
					to="/about">
					<li>О нас</li>
				</Link>
				<Link
					to="/prices">
					<li>Услуги и цены</li>
				</Link>
				<a href="http://levelupworlds.com/#/page/career">
					<li>Карьера <i className="fa fa-external-link"></i></li>
				</a>
				<Link
					to="/projects">
					<li>Проекты</li>
				</Link>
				<Link
					to="/contact">
					<li>Контакты</li>
				</Link>
			</ul>
			<ul className="header-logo">
				<Link to="/">
					<img src="img/logo-default.png" alt="Levelup Web"/>
				</Link>
			</ul>	
		</nav>
	</div>

export default Header;