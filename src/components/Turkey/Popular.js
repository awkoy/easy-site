import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/swiper.scss'
import EasyImage from '../Common/EasyImg'

SwiperCore.use([Autoplay]);

const PopularSlider = ({ rtl, list }) => (
    <div className="popular__list">
        <Swiper
            loop
            speed={10000}
            slidesPerView={'auto'}
            dir="rtl"
            autoplay={{
                "delay": 0,
                "disableOnInteraction": false
              }}
        >
            {list.map((img, i) => <SwiperSlide key={i}>
                <div className="popular__img"><EasyImage image={img} /></div>
            </SwiperSlide>)}
        </Swiper>
    </div>
)

const Popular = ({ popular }) => {
    return (
        <div className="popular">
            <h2 className="popular__title title">{popular.title}</h2>
            <div className="popular__text text">{popular.subtitle}</div>
            <PopularSlider list={popular.list} />
        </div>
    )
}
export default Popular
