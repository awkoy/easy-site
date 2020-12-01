import React, { useState } from 'react'

import chat from '../img/Chatbubbles.svg'
import close from '../img/i-close-w.svg'
import fb from '../img/support-fb.svg'
import inst from '../img/support-inst.svg'
import tg from '../img/support-tg.svg'
import vb from '../img/support-vb.svg'

const Support = () => {
    const [active, setActive] = useState(false);
    return (
        <div className={`support ${active ? 'active' : ''}`} onClick={() => setActive(!active)} onKeyPress={() => setActive(!active)} role="button"
        tabIndex={0}>
            <div className="support__trigger">
                <a href="https://www.facebook.com/EasyGet.Express.Delivery" target="_blank" rel="noopener noreferrer" className="support__item support__item--fb">
                    <img src={fb} alt="Facebook Icon" />
                </a>
                <a href="https://www.instagram.com/easyget.express/" target="_blank" rel="noopener noreferrer" className="support__item support__item--inst">
                    <img src={inst} alt="Instagram Icon" />
                </a>
                <a href="viber://pa?chatURI=u_dev_chat_eg_bot" target="_blank" rel="noopener noreferrer" className="support__item support__item--vb">
                    <img src={vb} alt="Viber Icon" />
                </a>
                <a href="https://t.me/MyEasyGet_bot?fbclid=IwAR0yY86DuwDHTkrCmTrIcOGYWHn57HaeE7yIamGtcnNJxJZulTHwSZx6KBE" target="_blank" rel="noopener noreferrer" className="support__item support__item--tg">
                    <img src={tg} alt="Telegram Icon" />
                </a>
                <div className="support__trigger-icon">
                    <img className="support__trigger-chat" src={chat} alt="Chat Icon" />
                    <img className="support__trigger-close" src={close} alt="Close Icon" />
                </div>
                <div className="support__trigger-name">
                    Підтримка
              </div>
            </div>
        </div>
    )
}

export default Support
