import React from "react";
import { Route } from "react-router-dom";
import propTypes from "prop-types";
import Header from '../components/header/Header.js';
import Footer from '../components/footer/Footer.js';
import './RoutePageContainer.css';

const RoutePageContainer = ({ component, location }) =>
	<Route render={props => 
		<div className="page-container">
			<div className="site-content">
				<div className="container text blocks">
					<Header />
					{React.createElement(component)}
					<Footer page={true} />
				</div>
			</div>
		</div>
	} />

export default RoutePageContainer;