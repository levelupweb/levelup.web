import React from "react";
import ContactForm from '../../components/contactForm/ContactForm.js';
import Modal from '../../components/modal/Modal.js';
import { Helmet } from "react-helmet";
import SubscribeForm from '../../components/subscribeForm/SubscribeForm.js';
import "./contact.css";

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

const contactModalConfiguration = {
	title: 'Обратная связь',
	description: 'Сообщение',
	content: 'С вашими деловыми предложениями вы можете обращаться при помощи данной формы обратной связи'
}

const subscribeModalConfiguration = {
	title: 'Извините, в данный момент рассылка недоступна',
	description: 'Но скоро всё обязательно вернётся! :)',
}

const renderContactForm = () => <ContactForm 
	isFluid={true} 
	fields={contactFormFields} />

const renderSubscribeForm = () => <SubscribeForm />

const Contact = props => {
	return (
		<div className="page-contact page">
			<Helmet>
        <title>Контакты - Levelup Web</title>
        <meta name="description" content="Контакты Levelup Web. Студия веб-разработок" />
    		<meta name="keywords" content="веб-разработка, веб агентство, создать веб-приложение, разработка приложений, купить сайт, создать сайт в студии под ключ, сайт под ключ купить" />
    		<meta name="author" content="Levelup Web" />
  			<meta name="robots" content="index, follow" />
  			<meta name="revisit-after" content="1 days" />
  			<meta property="og:type" content="website" />
    		<meta property="og:site_name" content="Levelup Web" />
    		<meta property="og:title" content="Контакты - Levelup Web Project" />
    		<meta property="og:description" content="Контакты Levelup Web. Студия веб-разработок" />
    		<meta property="og:url" content="http://web.levelupworlds.com/contact" />
    	</Helmet>
			<div className="block">
				<div className="block-title left" id="contact">
					<h5 className="super title">
						Контакты
					</h5>
					<p className="description">Как с нами связаться</p>
				</div>
			</div>
			<div className="block">
				<p className="primary">
					У вас есть деловое предложение? Свяжитесь с нами при помощи любого доступного вам способа, используя нашу контактную информацию
				</p>
			</div>
			<div className="block">
				<div className="list">
					<div className="item">
						<div className="icon">
							<img src="dist/img/paper-plane.png" alt="Почта"/>
						</div>
						<div className="content">
							hh@levelupworlds.com
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<img src="dist/img/placeholder.png" alt="Адрес"/>
						</div>
						<div className="content">
							г. Москва, Пресненская наб., 6, стр. 2
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<img src="dist/img/smartphone.png" alt="Мобильный телефон"/>
						</div>
						<div className="content">
							(903) 634-69-29
						</div>
					</div>
				</div>
			</div>
			<div className="block">
				<div className="button-group">
					<div>
						<Modal options={subscribeModalConfiguration} render={renderSubscribeForm()}>
							<button className="button">Рассылка</button>
						</Modal>
					</div>
					<div>
						<Modal options={contactModalConfiguration} render={renderContactForm()}>
							<button className="button">Написать нам</button>
						</Modal>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact;
