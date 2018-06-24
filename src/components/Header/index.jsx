import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import config from '../../utils/config';
import './styles.css';

const Header = ({ location }) => (
  <div className="header block">
    <nav className="navigation">
      <ul>
        <Link
          to="/about"
        >
          <li className={location.pathname === '/about' && 'active'}>О нас</li>
        </Link>
        <Link
					to="https://levelupworlds.com/career"
					target="_blank"
        >
          <li className={location.pathname === '/career' && 'active'}>Карьера</li>
        </Link>
        <Link
          to="/prices"
        >
          <li className={location.pathname === '/prices' && 'active'}>Услуги и цены</li>
        </Link>
        <Link
          to="/contact"
        >
          <li className={location.pathname === '/contact' && 'active'}>Контакты</li>
        </Link>
        <Link
          to="/projects"
        >
          <li className={location.pathname === '/projects' && 'active'}>Проекты</li>
        </Link>
      </ul>
      <ul className="header-logo">
        <Link to="/">
          <img src={`${config.static}/img/logo-default.png`} alt="Levelup Web" />
        </Link>
      </ul>
    </nav>
  </div>
);

export default withRouter(Header);

