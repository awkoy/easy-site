import React from 'react'
import logo from '../../img/main-logo.svg'
import EasyImage from '../Common/EasyImg'
// import { Link } from 'gatsby'

const EeasySection = ({
    easy,
    landing_images
}) => {
    const bgImages = [landing_images.easy1, landing_images.easy2,landing_images.easy3,landing_images.easy4,landing_images.easy5]
    return (
        <section className="landing-easy is-rounded-bottom">
            <div className="container">
                <img src={logo} alt="Main logo" className="landing-easy__logo" />
                <h1 className="main-title">
                    {easy.title_top} <span>{easy.title_bottom}</span>
                </h1>
                <div className="landing-easy__subtitle text">{easy.subtitle}</div>
                {/* <Link to="/black-friday" className="landing-easy__more">Детальніше</Link> */}
                {bgImages.map((img, i) => (
                    <div key={i} className={`landing-easy__img landing-easy__img${i + 1}`}>
                        <EasyImage image={img} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default EeasySection;