import React, { useState } from 'react'
import { IconLeft, IconRight } from '../Common/icons';

import ch1 from '../../img/cheapest1.png';
import ch2 from '../../img/cheapest2.png';
import ch3 from '../../img/cheapest3.png';

import easy from '../../img/c-easy.svg';
import ali from '../../img/c-ali.svg';
import inst from '../../img/c-inst.svg';

const CheapestSection = () => {
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

    return (
        <section className="landing-cheapest">
            <div className="container">
                <div className="landing-cheapest__slider">
                    <div style={{ transform: `rotate(${activeItem.rotate}deg` }} className="landing-cheapest__rotate">
                        <div style={{ transform: `translate(40%, 0%) rotate(-${activeItem.rotate}deg) scale(${activeItem.index === 0 ? 1 : 0.5})` }} className={`landing-cheapest__rotate-item ${activeItem.index === 0 ? 'is-active' : ''}`}>
                            <img src={ch1} />
                        </div>
                        <div style={{ transform: `translate(-28%, -39%) rotate(-${activeItem.rotate}deg) scale(${activeItem.index === 1 ? 1 : 0.5})` }} className={`landing-cheapest__rotate-item ${activeItem.index === 1 ? 'is-active' : ''}`}>
                            <img src={ch2} />
                        </div>
                        <div style={{ transform: `translate(-28%, 39%) rotate(-${activeItem.rotate}deg) scale(${activeItem.index === 2 ? 1 : 0.5})` }} className={`landing-cheapest__rotate-item ${activeItem.index === 2 ? 'is-active' : ''}`}>
                            <img src={ch3} />
                        </div>
                    </div>
                    <div className="landing-cheapest__active-zone">
                        <div className="easy-slider__prev" onClick={() => changeSlide('prev')}><IconLeft /></div>
                        <div className="easy-slider__next" onClick={() => changeSlide('next')}><IconRight /></div>
                    </div>
                </div>
                <div className="landing-cheapest__info">
                    <h2 className="landing-cheapest__title title">
                        У нас дешевше
                    </h2>
                    <div className="landing-cheapest__product-container">
                        <div className={`landing-cheapest__product ${activeItem.index === 0 ? 'is-active' : ''}`}>
                            <div className="landing-cheapest__product-title">Жіноча сумка</div>
                            <div className="landing-cheapest__prices">
                                <div className="landing-cheapest__price is-main">
                                    <div className="landing-cheapest__price-logo">
                                        <img src={easy} />
                                    </div>
                                    <div className="landing-cheapest__price-name">EasyGet</div>
                                    <div className="landing-cheapest__price-delivery">12 днів</div>
                                    <div className="landing-cheapest__price-count">410 ₴</div>
                                </div>
                                <div className="landing-cheapest__price">
                                    <div className="landing-cheapest__price-logo">
                                        <img src={ali} />
                                    </div>
                                    <div className="landing-cheapest__price-name">AliExpress</div>
                                    <div className="landing-cheapest__price-delivery">40 днів</div>
                                    <div className="landing-cheapest__price-count">643 ₴</div>
                                </div>
                                <div className="landing-cheapest__price">
                                    <div className="landing-cheapest__price-logo">
                                        <img src={inst} />
                                    </div>
                                    <div className="landing-cheapest__price-name">Instagram</div>
                                    <div className="landing-cheapest__price-delivery">1-2 дні</div>
                                    <div className="landing-cheapest__price-count">2050 ₴</div>
                                </div>
                            </div>
                            <div className="landing-cheapest__actions">
                                <span>Замовте прямо зараз →</span>
                                <a href="/" className="easy-btn easy-btn--reverse">Замовити</a>
                            </div>
                        </div>
                        <div className={`landing-cheapest__product ${activeItem.index === 1 ? 'is-active' : ''}`}>
                            <div className="landing-cheapest__product-title">Навушники</div>
                            <div className="landing-cheapest__prices">
                            <div className="landing-cheapest__price is-main">
                                    <div className="landing-cheapest__price-logo">
                                        <img src={easy} />
                                    </div>
                                    <div className="landing-cheapest__price-name">EasyGet</div>
                                    <div className="landing-cheapest__price-delivery">12 днів</div>
                                    <div className="landing-cheapest__price-count">210 ₴</div>
                                </div>
                                <div className="landing-cheapest__price">
                                    <div className="landing-cheapest__price-logo">
                                        <img src={ali} />
                                    </div>
                                    <div className="landing-cheapest__price-name">AliExpress</div>
                                    <div className="landing-cheapest__price-delivery">40 днів</div>
                                    <div className="landing-cheapest__price-count">443 ₴</div>
                                </div>
                                <div className="landing-cheapest__price">
                                    <div className="landing-cheapest__price-logo">
                                        <img src={inst} />
                                    </div>
                                    <div className="landing-cheapest__price-name">Instagram</div>
                                    <div className="landing-cheapest__price-delivery">1-2 дні</div>
                                    <div className="landing-cheapest__price-count">1050 ₴</div>
                                </div>
                            </div>
                            <div className="landing-cheapest__actions">
                                <span>Замовте прямо зараз →</span>
                                <a href="/" className="easy-btn easy-btn--reverse">Замовити</a>
                            </div>
                        </div>
                        <div className={`landing-cheapest__product ${activeItem.index === 2 ? 'is-active' : ''}`}>
                            <div className="landing-cheapest__product-title">Блендер</div>
                            <div className="landing-cheapest__prices">
                            <div className="landing-cheapest__price is-main">
                                    <div className="landing-cheapest__price-logo">
                                        <img src={easy} />
                                    </div>
                                    <div className="landing-cheapest__price-name">EasyGet</div>
                                    <div className="landing-cheapest__price-delivery">12 днів</div>
                                    <div className="landing-cheapest__price-count">1110 ₴</div>
                                </div>
                                <div className="landing-cheapest__price">
                                    <div className="landing-cheapest__price-logo">
                                        <img src={ali} />
                                    </div>
                                    <div className="landing-cheapest__price-name">AliExpress</div>
                                    <div className="landing-cheapest__price-delivery">40 днів</div>
                                    <div className="landing-cheapest__price-count">1643 ₴</div>
                                </div>
                                <div className="landing-cheapest__price">
                                    <div className="landing-cheapest__price-logo">
                                        <img src={inst} />
                                    </div>
                                    <div className="landing-cheapest__price-name">Instagram</div>
                                    <div className="landing-cheapest__price-delivery">1-2 дні</div>
                                    <div className="landing-cheapest__price-count">2230 ₴</div>
                                </div>
                            </div>
                            <div className="landing-cheapest__actions">
                                <span>Замовте прямо зараз →</span>
                                <a href="/" className="easy-btn easy-btn--reverse">Замовити</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CheapestSection;