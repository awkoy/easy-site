import React from 'react'
import logo from '../../img/main-logo.svg'
import EasyImage from '../Common/EasyImg'
import { Link } from 'gatsby'

const EeasySection = ({
    easy,
    landing_images = {},
    turkey_images = {}
}) => {
    const bgImages = [landing_images.easy1, landing_images.easy2,landing_images.easy3,landing_images.easy4,landing_images.easy5]
    const turkeyImages = [turkey_images.turkey1, turkey_images.turkey2, turkey_images.turkey3, turkey_images.turkey4]
    return (
        <section className="landing-easy is-rounded-bottom">
            <div className="container">
                <img src={logo} alt="Main logo" className="landing-easy__logo" />
                <h1 className="main-title">
                    {easy.title_top} <span>{easy.title_bottom}</span>
                </h1>
                <div className="landing-easy__subtitle text">{easy.subtitle}</div>
                {landing_images.easy1 && bgImages.map((img, i) => (
                    <div key={i} className={`landing-easy__img landing-easy__img${i + 1}`}>
                        <EasyImage image={img} />
                    </div>
                ))}
                {turkey_images.turkey1 && turkeyImages.map((img, i) => (
                    <div key={i} className={`landing-easy__img landing-easy__turkey-img${i + 1}`}>
                        <EasyImage image={img} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default EeasySection;