import React from 'react';
import Field from '../field/Field.js';
import Modal from '../modal/Modal.js';
import SubscribeForm from '../subscribeForm/SubscribeForm.js';
import './footer.css';

const subscribeModalConfiguration = {
	title: 'Извините, в данный момент рассылка недоступна',
	description: 'Но скоро всё обязательно вернётся! :)',
}

const renderSubscribeForm = () => <SubscribeForm />

const Footer = props =>
	<div className="footer">
		<div className="block">
			<div className="left">
				Создано в <a href="http://web.levelupworlds.com">Levelup Web</a> с любовью
			</div>
			<div className="right">
			</div>
		</div>
	</div>

export default Footer