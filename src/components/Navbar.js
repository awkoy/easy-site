import React, { useState } from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => {
  const [navBarActiveClass, setNavBarActiveClass] = useState('');

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div
          id="navMenu"
          className={`navbar__menu ${navBarActiveClass}`}
        >
          <Link className="navbar__link" to="/products">
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
          </Link>
          <a href="tel:0800567856" className="navbar__phone">0 800 56 7856</a>
          <a
            className="easy-btn"
            href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Спробувати
          </a>
        </div>
        {/* <div
          className={`navbar-burger burger ${navBarActiveClass}`}
          data-target="navMenu"
          onClick={() => setNavBarActiveClass(navBarActiveClass ? '' : 'is-active')}
        >
          <span />
          <span />
          <span />
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;