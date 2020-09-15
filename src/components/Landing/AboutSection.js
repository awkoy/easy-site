import React from 'react'
import aboutPhone from '../../img/about-phone.png'

import DownloadApp from '../DownloadApp'

const AboutSection = ({about_title, about_text}) => {
    return (
        <section className="landing-about">
            <div className="container">
                <div className="landing-about__phone">
                    <img src={aboutPhone} alt="About Image" />
                </div>
                <div className="landing-about__info">
                    <h2 className="title">{about_title}</h2>
                    <div className="text">{about_text}</div>
                    <DownloadApp />
                </div>
            </div>
        </section>
    )
}

export default AboutSection;