import React from "react";
import Price from "./Price.js";
import pricelist from './pricelist.js';
import ContactForm from '../../components/contactForm/ContactForm.js';
import Modal from '../../components/modal/Modal.js';
import { Helmet } from "react-helmet";
import "./prices.css";

const contactModalConfiguration = {
	title: 'Обратная связь',
	description: 'Сообщение',
	content: 'С вашими деловыми предложениями вы можете обращаться при помощи данной формы обратной связи'
}

const contactFormFields = [ {
		fieldName: 'Имя клиента',
		placeholder: 'Ваше имя',
		name: 'userName',
		type: 'text'
	}, {
		fieldName: 'E-Mail',
		placeholder: 'Ваш E-Mail',
		name: 'userEmail',
		type: 'text'
	}, {
		fieldName: 'Мобильный телефон',
		placeholder: 'Контактный телефон',
		name: 'userPhone',
		type: 'text'
	}, {
		fieldName: 'Сообщение',
		placeholder: 'Ваше сообщение',
		name: 'userMessage',
		type: 'textarea'
} ]

const contactFormRules = {
	userName: ['required'],
	userEmail: ['required', 'email'],
	userPhone: ['required', 'mobile'],
	userMessage: ['required']
}

const renderContactForm = () => <ContactForm 
	isFluid={true} 
	rules={contactFormRules}
	fields={contactFormFields} />

const Prices = props => {
	return (
		<div className="page-prices page">
			<Helmet>
        <title>Цены - Levelup Web</title>
        <meta name="description" content="Цены на разработку. Студия веб-разработок Levelup Web" />
    		<meta name="keywords" content="веб-разработка, веб агентство, создать веб-приложение, разработка приложений, купить сайт, создать сайт в студии под ключ, сайт под ключ купить" />
    		<meta name="author" content="Levelup Web" />
  			<meta name="robots" content="index, follow" />
  			<meta name="revisit-after" content="1 days" />
  			<meta property="og:type" content="website" />
  			<meta property="og:site_name" content="Levelup Web" />
  			<meta property="og:title" content="Цены - Levelup Web Project" />
  			<meta property="og:description" content="Цены на разработку. Студия веб-разработок" />
  			<meta property="og:url" content="http://web.levelupworlds.com/prices" />
    	</Helmet>
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
