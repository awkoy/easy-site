import React from 'react'
import Img from 'gatsby-image'
import logo from '../../img/main-logo.svg'

const EeasySection = ({
    title_top,
    title_bottom,
    subtitle,
    landing_images
}) => {
    const bgImages = [landing_images.easy1, landing_images.easy2,landing_images.easy3,landing_images.easy4,landing_images.easy5]
    return (
        <section className="landing-easy is-rounded-bottom">
            <div className="container">
                <img src={logo} alt="Main logo" className="landing-easy__logo" />
                <h1 className="main-title">
                    {title_top} <span>{title_bottom}</span>
                </h1>
                <div className="landing-easy__subtitle text">{subtitle}</div>

                {bgImages.map((img, i) => (
                    <div key={i} className={`landing-easy__img landing-easy__img${i + 1}`}>
                        <Img fluid={img.childImageSharp.fluid} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default EeasySection;