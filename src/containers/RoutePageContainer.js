import React from "react";
import { Route } from "react-router-dom";
import propTypes from "prop-types";
import Header from '../components/header/Header.js';
import Footer from '../components/footer/Footer.js';
import './RoutePageContainer.css';

const RoutePageContainer = ({ component }) =>
	<div className="page-container">
		<div className="site-content">
			<div className="container text blocks">
				<div className="block primary">
					<Header visible={true} isNotFixed={true} isHorizontal={true} />
				</div>
				<Route render={props => 
					<div className="block">
						{React.createElement(component)}
					</div>
				} />
				<div className="block">
					<Footer />
				</div>
			</div>
		</div>
	</div>;

export default RoutePageContainer;
