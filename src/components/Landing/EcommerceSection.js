import React from 'react'

import eccom from '../../img/ecommerce1.svg'

const EcommerceSection = () => {
    return (
        <section className="landing-ecommerce">
            <div className="container">
                <h2 className="landing-ecommerce__title title">Популярні магазини</h2>
                <div className="landing-ecommerce__subtitle text">
                    Не обмежуйтеся цим переліком, магазинів безліч! Купуйте де-завгодно, ми доставимо
                </div>
                <div className="landing-ecommerce__list">
                    <div className="landing-ecommerce__list-item">
                        <img src={eccom} alt="Taobao logo" />
                    </div>
                    <div className="landing-ecommerce__list-item">
                        <img src={eccom} alt="Taobao logo" />
                    </div>
                    <div className="landing-ecommerce__list-item">
                        <img src={eccom} alt="Taobao logo" />
                    </div>
                    <div className="landing-ecommerce__list-item">
                        <img src={eccom} alt="Taobao logo" />
                    </div>
                    <div className="landing-ecommerce__list-item">
                        <img src={eccom} alt="Taobao logo" />
                    </div>
                    <div className="landing-ecommerce__list-item">
                        <img src={eccom} alt="Taobao logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EcommerceSection;