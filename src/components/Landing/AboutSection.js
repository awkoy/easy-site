import React from 'react'
import aboutPhone from '../../img/about-phone.png'

import DownloadApp from '../DownloadApp'

const AboutSection = () => {
    return (
        <section className="landing-about">
            <div className="container">
                <div className="landing-about__phone">
                    <img src={aboutPhone} alt="About Image" />
                </div>
                <div className="landing-about__info">
                    <h2 className="title">EasyGet</h2>
                    <div className="text">EasyGet — інструмент для зручної доставки та покупки товарів з іноземних сайтів. Ви можете придбати товар самостійно або просто додати його фото чи назву в нашому додатку і через 7-14 днів отримати його у своєму відділенні Нової Пошти.</div>
                    <DownloadApp />
                </div>
            </div>
        </section>
    )
}

export default AboutSection;