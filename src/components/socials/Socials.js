import React from 'react';
import './socials.css'

const Socials = () => 
	<div className="socials">
		<div className="social vk">
			<a href="https://vk.com/levelupweb" target="_blank">
				<i className="fa fa-vk"></i>
			</a>
		</div>
		<div className="social twitter">
			<a href="https://twitter.com/levelup_web" target="_blank">
				<i className="fa fa-twitter"></i>
			</a>
		</div>
		<div className="social github">
			<a href="https://github.com/levelupweb/" target="_blank">
				<i className="fa fa-github"></i>
			</a>
		</div>
		<div className="social telegram">
			<a href="https://t.me/levelupweb" target="_blank">
				<i className="fa fa-telegram"></i>
			</a>
		</div>
	</div>

export default Socials;