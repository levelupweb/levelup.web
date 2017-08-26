import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./burger.css";

class Burger extends Component {
	constructor(props) {
		super(props);
		this.state = {
			revealed: false
		};
	}

	revealNavigation() {
		if (!this.props.visible) {
		  document.querySelector(".site-content").classList.toggle("blured");
		} 
		
		this.setState({
			revealed: !this.state.revealed
		});
	}

	render() {
		const { revealed } = this.state;
		const { visible, isNotFixed, isHorizontal } = this.props;
		return (
			<div className="burger">
				<p className="burger-revealer spacing"
					onClick={() => { this.revealNavigation() }}>
					{revealed ? "Закрыть" : "Открыть меню"}
				</p>
				<nav className={revealed ? "navigation revealed" : "navigation"}>
					<ul>
						<Link
							to="/about"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>О нас</li>
						</Link>
						<Link
							to="/prices"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>Услуги и цены</li>
						</Link>
						<a
							href="http://levelupworlds.com/#/page/career"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>Карьера</li>
						</a>
						<Link
							to="/projects"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>Проекты</li>
						</Link>
						<Link
							to="/contact"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>Контакты</li>
						</Link>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Burger;