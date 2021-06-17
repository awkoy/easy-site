import React, { useState } from 'react'
import useSwiperRef from '../../hooks/useSwiperRef'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.scss'
import "swiper/components/navigation/navigation.scss"
import "swiper/components/effect-fade/effect-fade.scss"
import "swiper/components/pagination/pagination.scss"
import EasyImage from './EasyImg';
import SwiperCore, { Controller, EffectFade, Navigation, Pagination } from 'swiper';
SwiperCore.use([Pagination, Navigation, EffectFade, Controller]);

const ShopsSlider = ({list}) => {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const [nextEl, nextElRef] = useSwiperRef();
    const [prevEl, prevElRef] = useSwiperRef();
    return (
        <div className="turkey-shops__content">
            <div className="turkey-shops__slider">
                <Swiper
                    controller={{ control: controlledSwiper }}
                    slidesPerView={3}
                    navigation={{
                        prevEl,
                        nextEl,
                    }}
                    centeredSlides={true}
                    direction={'vertical'}
                    pagination={{
                        "clickable": true
                    }}>
                    {list.map((shop, i) => (<SwiperSlide key={shop.description}>
                        <div className="turkey-shops__logo">
                            <div className="img-container">
                                <EasyImage image={shop.logo} />
                            </div>
                        </div>
                    </SwiperSlide>))}
                </Swiper>
                <div className="swiper-button-prev" ref={prevElRef} />
                <div className="swiper-button-next" ref={nextElRef} />
            </div>
            <Swiper onSwiper={setControlledSwiper} slidesPerView={1} effect="fade">
                {list.map((shop, i) => (<SwiperSlide key={shop.name + i}>
                    <div className="turkey-shops__current-shop">
                        <div className="turkey-shops__current-shop__about">
                            <div className="turkey-shops__current-shop__title">
                                {shop.name}
                            </div>
                            <div className="turkey-shops__current-shop__text text">
                                {shop.description}
                            </div>
                            <a target="_blank" href={shop.link} className="turkey-shops__current-shop__btn easy-btn">
                                Обрати товар
                            </a>
                        </div>
                        <div className="turkey-shops__current-shop__prices">
                            {shop.prices.map((price) => (
                                <div key={shop.name + price.type} className="turkey-shops__current-shop__prices__item">
                                    <span>{price.type}</span><b>{price.cost}</b>
                                </div>
                            ))}
                        </div>
                    </div>
                </SwiperSlide>))}
            </Swiper>
        </div>
    )
}

export default ShopsSlider