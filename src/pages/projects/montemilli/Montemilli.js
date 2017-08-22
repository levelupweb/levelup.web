import React from 'react';
import { Link } from 'react-router-dom'
import './montemilli.css'

const Montemilli = props => 
	<div className="page-montemilli">
		<section className="fullpage center first notFound">
			<Link to="/">
				<img src="img/logo-default.png" width="64px" />
			</Link>
			<p className="primary">Данный кейс в разработке..</p>
			<Link to="/projects">Назад</Link>
		</section>
	</div>

export default Montemilli