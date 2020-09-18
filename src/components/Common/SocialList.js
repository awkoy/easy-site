import React from 'react'
import { firebaseLog } from '../../utils/analytics'
import { IconFacebook, IconInst, IconTelegram } from './icons'

const SocialList = () => {
    const handleClick = (content_type) => firebaseLog('contact', {content_type})
    return (
        <div className="social-list">
            <a href="https://www.facebook.com/EasyGet.Express.Delivery" target="_blank" rel="noopener noreferrer" className="social-item" onClick={() => handleClick('fb')} >
                <IconFacebook />
            </a>
            <a href="https://www.instagram.com/easyget.express/" target="_blank" rel="noopener noreferrer" className="social-item" onClick={() => handleClick('inst')}>
                <IconInst />
            </a>
            <a href="https://t.me/MyEasyGet_bot?fbclid=IwAR0yY86DuwDHTkrCmTrIcOGYWHn57HaeE7yIamGtcnNJxJZulTHwSZx6KBE
" target="_blank" rel="noopener noreferrer" className="social-item" onClick={() => handleClick('telegram')}>
                <IconTelegram />
            </a>
            {/* <a href="https://t.me/MyEasyGet_bot?fbclid=IwAR0yY86DuwDHTkrCmTrIcOGYWHn57HaeE7yIamGtcnNJxJZulTHwSZx6KBE" className="social-item">
            <IconViber />
        </a> */}
        </div>
    )
}

export default SocialList
