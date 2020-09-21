import React, { useState } from 'react'
import { IconLeft, IconRight } from '../Common/icons';

import EasyImage from '../Common/EasyImg';
import { firebaseLog } from '../../utils/analytics';

const CheapestSection = ({ cheapest }) => {
    const [activeItem, setActiveItem] = useState({
        rotate: 0,
        index: 0,
    });
    const changeSlide = (direction) => {
        const { rotate, index } = activeItem;
        if (direction === 'next') {
            setActiveItem({
                rotate: rotate + 120,
                index: (index < 2) ? index + 1 : 0,
            })
        }
        if (direction === 'prev') {
            if (rotate < 120) return false;
            setActiveItem({
                rotate: rotate - 120,
                index: (index > 0) ? index - 1 : 2,
            })
        }
    }
    const logEvent = (item_name) => firebaseLog('buy_product', { item_name })

    return (
        <section className="landing-cheapest">
            <div className="container">
                <div className="landing-cheapest__slider">
                    <div style={{ transform: `rotate(${activeItem.rotate}deg` }} className="landing-cheapest__rotate">
                        <div style={{ transform: `translate(40%, 0%) rotate(-${activeItem.rotate}deg) scale(${activeItem.index === 0 ? 1 : 0.5})` }} className={`landing-cheapest__rotate-item ${activeItem.index === 0 ? 'is-active' : ''}`}>
                            <EasyImage image={cheapest.products[0].image} />
                        </div>
                        <div style={{ transform: `translate(-28%, -39%) rotate(-${activeItem.rotate}deg) scale(${activeItem.index === 1 ? 1 : 0.5})` }} className={`landing-cheapest__rotate-item ${activeItem.index === 1 ? 'is-active' : ''}`}>
                            <EasyImage image={cheapest.products[1].image} />
                        </div>
                        <div style={{ transform: `translate(-28%, 39%) rotate(-${activeItem.rotate}deg) scale(${activeItem.index === 2 ? 1 : 0.5})` }} className={`landing-cheapest__rotate-item ${activeItem.index === 2 ? 'is-active' : ''}`}>
                            <EasyImage image={cheapest.products[2].image} />
                        </div>
                    </div>
                    <div className="landing-cheapest__active-zone">
                        <div className="easy-slider__prev" role="button" tabIndex={0} aria-label="Prev slide" onClick={() => changeSlide('prev')} onKeyPress={() => changeSlide('prev')}><IconLeft /></div>
                        <div className="easy-slider__next" role="button" tabIndex={0} aria-label="Next slide" onClick={() => changeSlide('next')} onKeyPress={() => changeSlide('next')}><IconRight /></div>
                    </div>
                </div>
                <div className="landing-cheapest__info">
                    <h2 className="landing-cheapest__title title">{cheapest.title}</h2>
                    <div className="landing-cheapest__product-container">
                        {cheapest.products.map((product, i) => (
                            <div key={i} className={`landing-cheapest__product ${activeItem.index === i ? 'is-active' : ''}`}>
                                <div className="landing-cheapest__product-title">{product.name}</div>
                                <div className="landing-cheapest__prices">
                                    {product.compare && product.compare.map(({ logo, title, duration, price }, i) => (
                                        <div key={i} className={`landing-cheapest__price ${i === 0 ? 'is-main' : ''}`}>
                                            <div className="landing-cheapest__price-logo">
                                                <EasyImage image={logo} />
                                            </div>
                                            <div className="landing-cheapest__price-name">{title}</div>
                                            <div className="landing-cheapest__price-delivery">{duration}</div>
                                            <div className="landing-cheapest__price-count">{price}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="landing-cheapest__actions">
                                    <span>Замовте прямо зараз →</span>
                                    <a onClick={() => logEvent(product.name)} href="https://app.easyget.com.ua/" target="_blank" rel="noopener noreferrer" className="easy-btn easy-btn--reverse">Замовити</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheapestSection;