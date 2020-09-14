import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade } from 'swiper'

import 'swiper/swiper.scss'
import 'swiper/components/effect-fade/effect-fade.scss'

import free1 from '../../img/free1.png'
import free2 from '../../img/free2.png'
import free3 from '../../img/free3.png'

import {IconLeft, IconRight} from '../Common/icons';

SwiperCore.use([EffectFade]);

const data = [
    {
        title: 'Фотографування товару на складi',
        text: 'EasyGet — інструмент для зручної доставки та покупки товарів з іноземних сайтів. Ви можете придбати товар самостійно або просто додати його фото чи назву в нашому додатку і через 7-14 днів отримати його у своєму відділенні Нової Пошти.',
        img: free1
    },
    {
        title: 'Доставка до “Нової Пошти”',
        text: 'EasyGet — інструмент для зручної доставки та покупки товарів з іноземних сайтів. Ви можете придбати товар самостійно або просто додати його фото чи назву в нашому додатку і через 7-14 днів отримати його у своєму відділенні Нової Пошти.',
        img: free2
    },
    {
        title: 'Розділення великого замовлення',
        text: 'EasyGet — інструмент для зручної доставки та покупки товарів з іноземних сайтів. Ви можете придбати товар самостійно або просто додати його фото чи назву в нашому додатку і через 7-14 днів отримати його у своєму відділенні Нової Пошти.',
        img: free3
    }
];

const Slide = ({ title, text, img }) => (
    <div className="landing-free__slide">
        <div className="landing-free__photo">
            <img src={img} alt={title} />
        </div>
        <div className="landing-free__content">
            <h2 className="landing-free__title title">Безкоштовно</h2>
            <div className="landing-free__subtitle subtitle">{title}</div>
            <div className="landing-free__text text">{text}</div>
        </div>
    </div>
);

const FreeSection = () => {
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
                    {data.map(d => <SwiperSlide key={d.title}><Slide {...d} /></SwiperSlide>)}
                </Swiper>
                <div className="easy-slider__prev" onClick={() => swiper.slidePrev()}><IconLeft /></div>
                <div className="easy-slider__next" onClick={() => swiper.slideNext()}><IconRight /></div>
            </div>
        </section>
    )
}

export default FreeSection;