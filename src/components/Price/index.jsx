import React, { Component } from 'react';
import './styles.css'

const Price = props => 
	<div className="price">
		<div className="price-content">
			<div className="left">
				<img src={props.price.image} width="50px" alt={props.price.title} />
			</div>
			<div className="right">
				<h4 className="price-title">{props.price.title}</h4>
				<p className="price-cost"><strong>от {props.price.cost} руб.</strong></p>
			</div>
		</div>
		<p className="price-description">{props.price.description}</p>
	</div>
	

export default Price;