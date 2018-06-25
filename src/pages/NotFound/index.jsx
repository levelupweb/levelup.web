import React from 'react';
import { Link } from 'react-router-dom'
import "./styles.css"

const NotFound = props => 
	<section className="fullpage center first notFound">
		<Link to="/">
			<img src="/img/logo-default.png" width="64px" />
		</Link>
		<p className="primary">Ошибка 404</p>
	</section>

export default NotFound;