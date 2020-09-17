import React from 'react'
import Img from 'gatsby-image'

import DownloadApp from '../DownloadApp'

const AboutSection = ({ about_title, about_text, aboutPhone }) => {

    return (
        <section className="landing-about">
            <div className="container">
                <div className="landing-about__phone">
                    <Img fluid={aboutPhone.childImageSharp.fluid} />
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