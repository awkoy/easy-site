import React from 'react'
import Img from 'gatsby-image'
import logo from '../../img/main-logo.svg'
import { useStaticQuery, graphql } from "gatsby"

const EeasySection = ({
    title_top,
    title_bottom,
    subtitle
}) => {
    const queryImages = useStaticQuery(graphql`
        query EasyQuery {
            easy1: file(relativePath: { eq: "easy1.png" }) {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
              easy2: file(relativePath: { eq: "easy2.png" }) {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
              easy3: file(relativePath: { eq: "easy3.png" }) {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
              easy4: file(relativePath: { eq: "easy4.png" }) {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
              easy5: file(relativePath: { eq: "easy5.png" }) {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
        }
    `);

    return (
        <section className="landing-easy is-rounded-bottom">
            <div className="container">
                <img src={logo} alt="Main logo" className="landing-easy__logo" />
                <h1 className="main-title">
                    {title_top} <span>{title_bottom}</span>
                </h1>
                <div className="landing-easy__subtitle text">{subtitle}</div>

                {Object.values(queryImages).map((img, i) => (
                    <div key={i} className={`landing-easy__img landing-easy__img${i + 1}`}>
                        <Img fluid={img.childImageSharp.fluid} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default EeasySection;