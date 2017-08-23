import React from "react";
import Price from "./Price.js";
import pricelist from './pricelist.js';
import ContactForm from '../../components/contactForm/ContactForm.js';
import Modal from '../../components/modal/Modal.js';
import "./prices.css";

const contactModalConfiguration = {
	title: 'Обратная связь',
	description: 'Сообщение',
	content: 'С вашими деловыми предложениями вы можете обращаться при помощи данной формы обратной связи'
}

const contactFormFields = [
	{
		fieldName: 'Имя клиента',
		placeholder: 'Ваше имя',
		name: 'userName',
		type: 'text'
	},
	{
		fieldName: 'E-Mail',
		placeholder: 'Ваш E-Mail',
		name: 'userEmail',
		type: 'text'
	},
	{
		fieldName: 'Мобильный телефон',
		placeholder: 'Контактный телефон',
		name: 'userPhone',
		type: 'text'
	},
	{
		fieldName: 'Сообщение',
		placeholder: 'Ваше сообщение',
		name: 'userMessage',
		type: 'textarea'
	}
]

const renderContactForm = () => <ContactForm 
	isFluid={true} 
	fields={contactFormFields} />

const Prices = props => {
	return (
		<div className="page-about">
			<div className="block">
				<div className="block-title left" id="prices">
					<h5 className="super title">
						Услуги и прайс
					</h5>
					<p className="description">Какие услуги мы реализуем и сколько это будет стоить</p>
				</div>
			</div>
			<div className="block">
				<p className="primary">
					Ищите хорошую команду исполнителей для своего проекта? Мы можем предложить вам целый список реализуемых услуг
				</p>
			</div>
			<div className="block">
				<div className="prices">
					{pricelist.map((price, i) => <Price price={price} key={i} />)}
				</div>
			</div>
			<div className="block">
				<Modal options={contactModalConfiguration} render={renderContactForm()}>
					<button className="button">Работать вместе</button>
				</Modal>
			</div>
		</div>
	)
}

export default Prices;
