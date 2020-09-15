import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"

import DownloadApp from '../DownloadApp'

const AboutSection = ({ about_title, about_text }) => {
    const { aboutPhone } = useStaticQuery(graphql`
        query HeaderQuery {
            aboutPhone: file(relativePath: { eq: "about-phone.png" }) {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
            }
        }
    `);

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