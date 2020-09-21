import React from 'react'
import DownloadApp from './DownloadApp'

import mainlogo from '../img/main-logo.svg'
import SocialList from './Common/SocialList'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer__social">
              <img src={mainlogo} alt="A main logo" className="footer__logo" />
              <SocialList />
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
              {/* <Link to="/obrobka-dannih">Політика конфіденційності</Link>
              <Link to="/kliyentam">Публічний договір</Link>
              <Link to="/zaboroneni-tovary">Заборонено пересилати</Link> */}
              <Link to="/poriadok-povernennia-tovariv">Порядок повернення товарів</Link>
              <Link to="/poryadok-utylizatsii-tovariv">Порядок утилізації товарів</Link>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
