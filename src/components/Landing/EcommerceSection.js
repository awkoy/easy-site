import React from 'react'

import EasyImage from '../Common/EasyImg';

const EcommerceSection = ({ shops }) => {
    return (
        <section className="landing-ecommerce">
            <div className="container">
                <h2 className="landing-ecommerce__title title">{shops.title}</h2>
                <div className="landing-ecommerce__subtitle text">{shops.subtitle}</div>
                <div className="landing-ecommerce__list">
                    {shops.list.map(({ shop }, i) => (
                        <div key={i} className="landing-ecommerce__list-item">
                            <EasyImage image={shop} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EcommerceSection;