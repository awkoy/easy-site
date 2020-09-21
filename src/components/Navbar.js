import React, { useState } from 'react'
// import { Link } from 'gatsby'
import { IconClose } from './Common/icons';
import SocialList from './Common/SocialList';
import { firebaseLog } from '../utils/analytics';

const Navbar = () => {
  const [navBarActiveClass, setNavBarActiveClass] = useState('');

  return (
    <nav
      className={`navbar ${navBarActiveClass}`}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div
          className={`navbar-burger ${navBarActiveClass}`}
          data-target="navMenu"
          role="button"
          tabIndex={0}
          aria-label="navbar-button"
          onClick={() => setNavBarActiveClass('is-active')}
          onKeyPress={() => setNavBarActiveClass('is-active')}
        >
          <span />
          <span />
          <span />
        </div>
        <div
          id="navMenu"
          className={`navbar__menu ${navBarActiveClass}`}
        >
          {/* <Link className="navbar__link" to="/products">
            Скільки це коштує
            </Link>
          <Link className="navbar__link" to="/blog">
            шопінг
            </Link>
          <Link className="navbar__link" to="/contact">
            інформація
            </Link>
          <Link className="navbar__link" to="/tracking">
            Трекінг
          </Link> */}

          <span className="navbar__menu__close" aria-label="Close" role="button" tabIndex={0} onClick={() => setNavBarActiveClass('')} onKeyPress={() => setNavBarActiveClass('')}><IconClose /></span>
        </div>
        <a role="button" tabIndex={0} onClick={() => firebaseLog('copy_phone_number')} onKeyPress={() => firebaseLog('copy_phone_number')} href="tel:0800217980" className="navbar__phone">0 800 21 7980</a>
        <div className="navbar__social"><SocialList /></div>
        <a
          className="easy-btn"
          href="https://app.easyget.com.ua/"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          tabIndex={0}
          onClick={() => firebaseLog('try_easyget')}
          onKeyPress={() => firebaseLog('try_easyget')}
        >
          Спробувати
        </a>
      </div>
    </nav>
  );
}

export default Navbar;