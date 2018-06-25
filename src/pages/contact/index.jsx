import React from "react";
import ContactForm from '../../components/ContactForm';
import Modal from '../../components/Modal';
import { Helmet } from "react-helmet";
import Socials from '../../components/Socials'
import config from "../../utils/config";
import "./styles.css";

const contactFormFields = [{
  placeholder: 'Ваше имя',
  name: 'name',
  type: 'text',
}, {
  placeholder: 'Ваш E-Mail',
  name: 'email',
  type: 'text',
}, {
  placeholder: 'Контактный телефон',
  name: 'phone',
  type: 'text',
}, {
  placeholder: 'Ваше сообщение',
  name: 'message',
  type: 'textarea',
}];

const Contact = props => {
	const contactModalConfiguration = {
    title: 'Обратная связь',
    description: 'Сообщение',
    content: 'С вашими деловыми предложениями вы можете обращаться при помощи данной формы обратной связи',
	};
	
	return (
		<div className="page-contact">
			<Helmet>
        <title>Контакты - Levelup Web</title>
        <meta name="description" content="Контакты Levelup Worlds. Digital-студия полного цикла" />
    		<meta name="keywords" content="фото, видео съемка, звукозапись, звук студия, веб-разработка, веб агентство, создать веб-приложение, разработка приложений, купить сайт, создать сайт в студии под ключ, сайт под ключ купить" />
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
				<Socials />
			</div>
			<div className="block">
				<Modal
					options={contactModalConfiguration}
					render={(
						<ContactForm
							isFluid
							url={config.contactemail}
							fields={contactFormFields}
						/>
					)}
				>
					<button className="button">Написать нам</button>
				</Modal>
			</div>
		</div>
	)
}

export default Contact;
