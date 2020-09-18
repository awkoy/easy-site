import React from 'react'
import { IconFacebook, IconInst, IconTelegram } from './icons'

const SocialList = () => (
    <div className="social-list">
        <a href="https://www.facebook.com/EasyGet.Express.Delivery" target="_blank" rel="noopener noreferrer" className="social-item">
            <IconFacebook />
        </a>
        <a href="https://www.instagram.com/easyget.express/" target="_blank" rel="noopener noreferrer" className="social-item">
            <IconInst />
        </a>
        <a href="https://t.me/MyEasyGet_bot?fbclid=IwAR0yY86DuwDHTkrCmTrIcOGYWHn57HaeE7yIamGtcnNJxJZulTHwSZx6KBE
" target="_blank" rel="noopener noreferrer" className="social-item">
            <IconTelegram />
        </a>
        {/* <a href="https://t.me/MyEasyGet_bot?fbclid=IwAR0yY86DuwDHTkrCmTrIcOGYWHn57HaeE7yIamGtcnNJxJZulTHwSZx6KBE" className="social-item">
            <IconViber />
        </a> */}
    </div>
)

export default SocialList
