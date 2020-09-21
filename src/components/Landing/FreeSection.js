import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade } from 'swiper'

import 'swiper/swiper.scss'
import 'swiper/components/effect-fade/effect-fade.scss'

import {IconLeft, IconRight} from '../Common/icons';
import EasyImage from '../Common/EasyImg'

SwiperCore.use([EffectFade]);

const Slide = ({ title, subtitle, text, image }) => (
    <div className="landing-free__slide">
        <div className="landing-free__photo">
            <EasyImage image={image} />
        </div>
        <div className="landing-free__content">
            <h2 className="landing-free__title title">{title}</h2>
            <div className="landing-free__subtitle subtitle">{subtitle}</div>
            <div className="landing-free__text text">{text}</div>
        </div>
    </div>
);

const FreeSection = ({free}) => {
    const [swiper, setSwiper] = useState({});
    
    return (
        <section className="landing-free is-rounded-top">
            <div className="container">
                <Swiper
                    slidesPerView={1}
                    effect="fade"
                    loop
                    onSwiper={(s) => setSwiper(s)}
                >
                    {free.map(d => <SwiperSlide key={d.subtitle}><Slide {...d} /></SwiperSlide>)}
                </Swiper>
                <div aria-label="Prev button" className="easy-slider__prev" role="button" onKeyPress={() => swiper.slidePrev()} tabIndex={0} onClick={() => swiper.slidePrev()}><IconLeft /></div>
                <div aria-label="Next button" className="easy-slider__next" role="button" onKeyPress={() => swiper.slideNext()} tabIndex={0} onClick={() => swiper.slideNext()}><IconRight /></div>
            </div>
        </section>
    )
}

export default FreeSection;