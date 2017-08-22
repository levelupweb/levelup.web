import React from 'react';
import { Link } from 'react-router-dom'
import './avantazh.css'

const Avantazh = props => 
	<div className="page-avantazh">
		<section className="fullpage center first notFound">
			<Link to="/">
				<img src="img/logo-default.png" width="64px" />
			</Link>
			<p className="primary">Данный кейс в разработке..</p>
			<Link to="/projects">Назад</Link>
		</section>
	</div>

export default Avantazh