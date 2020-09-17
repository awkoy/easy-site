import React from 'react'
import Img from 'gatsby-image'

import DownloadApp from '../DownloadApp'
import EasyImage from '../Common/EasyImg'

const AboutSection = ({ about }) => {

    return (
        <section className="landing-about">
            <div className="container">
                <div className="landing-about__phone">
                    <EasyImage image={about.image} />
                </div>
                <div className="landing-about__info">
                    <h2 className="title">{about.title}</h2>
                    <div className="text">{about.text}</div>
                    <DownloadApp />
                </div>
            </div>
        </section>
    )
}

export default AboutSection;