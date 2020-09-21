import React from 'react'
import DownloadApp from './DownloadApp'

import mainlogo from '../img/main-logo.svg'
import SocialList from './Common/SocialList'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer__social">
              <img src={mainlogo} alt="A main logo" className="footer__logo" />
              <SocialList />
              {/* <div className="footer__social-list">
                <a href="/" className="footer__social-item">
                  <IconFacebook />
                </a>
                <a href="/" className="footer__social-item">
                  <IconInst />
                </a>
                <a href="/" className="footer__social-item">
                  <IconTelegram />
                </a>
                <a href="/" className="footer__social-item">
                  <IconViber />
                </a>
              </div> */}
            </div>
            <div className="footer__about">
              <div className="text">
                EasyGet — мобільний додаток нового покоління. Тепер шопінг на інтернет-платформах Китаю і США стає ще зручнішим та швидшим. Забудьте про втомливі процедури замовлення — просто завантажте у застосунок посилання на потрібний товар або вкажіть наш склад у країні відправника для отримання посилки
              </div>
            </div>
            <div className="footer__download">
              <DownloadApp dark />
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__copyright">
              © 2020 EASYGET
            </div>
            <div className="footer__policy-list">
              {/* <a href="">Політика конфіденційності</a>
              <a href="">Публічний договір</a>
              <a href="">Заборонено пересилати</a>
              <a href="">Порядок повернення товарів</a>
              <a href="">Порядок утилізації товарів</a> */}
            </div>
          </div>
        </div>
        {/* <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </footer>
    )
  }
}

export default Footer
