import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade } from 'swiper'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

import 'swiper/swiper.scss'
import 'swiper/components/effect-fade/effect-fade.scss'

import free1 from '../../img/free1.png'
import free2 from '../../img/free2.png'
import free3 from '../../img/free3.png'

import {IconLeft, IconRight} from '../Common/icons';

SwiperCore.use([EffectFade]);

const Slide = ({ title, subtitle, text, image }) => (
    <div className="landing-free__slide">
        <div className="landing-free__photo">
            <PreviewCompatibleImage imageInfo={{image}} />
        </div>
        <div className="landing-free__content">
            <h2 className="landing-free__title title">{title}</h2>
            <div className="landing-free__subtitle subtitle">{subtitle}</div>
            <div className="landing-free__text text">{text}</div>
        </div>
    </div>
);

const FreeSection = ({free_section}) => {
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
                    {free_section.map(d => <SwiperSlide key={d.subtitle}><Slide {...d} /></SwiperSlide>)}
                </Swiper>
                <div className="easy-slider__prev" onClick={() => swiper.slidePrev()}><IconLeft /></div>
                <div className="easy-slider__next" onClick={() => swiper.slideNext()}><IconRight /></div>
            </div>
        </section>
    )
}

export default FreeSection;