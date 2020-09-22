import React from 'react'
import { firebaseLog } from '../../utils/analytics'
import { IconFacebook, IconInst, IconTelegram, IconViber } from './icons'

const SocialList = () => {
    const handleClick = (content_type) => firebaseLog('contact', { content_type })
    return (
        <div className="social-list">
            <a href="https://www.facebook.com/EasyGet.Express.Delivery" target="_blank" rel="noopener noreferrer" className="social-item" aria-label="facebook" onClick={() => handleClick('fb')} >
                <IconFacebook />
            </a>
            <a href="https://www.instagram.com/easyget.express/" target="_blank" rel="noopener noreferrer" className="social-item" aria-label="instagram" onClick={() => handleClick('inst')}>
                <IconInst />
            </a>
            <a href="https://t.me/MyEasyGet_bot?fbclid=IwAR0yY86DuwDHTkrCmTrIcOGYWHn57HaeE7yIamGtcnNJxJZulTHwSZx6KBE" target="_blank" rel="noopener noreferrer" className="social-item" aria-label="telegram" onClick={() => handleClick('telegram')}>
                <IconTelegram />
            </a>
            <a href="viber://pa?chatURI=u_dev_chat_eg_bot" target="_blank" rel="noopener noreferrer" className="social-item" aria-label="telegram" onClick={() => handleClick('viber')}>
                <IconViber />
            </a>
        </div>
    )
}

export default SocialList
