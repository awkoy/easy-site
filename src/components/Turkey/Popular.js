import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/swiper.scss'
import EasyImage from '../Common/EasyImg'

SwiperCore.use([Autoplay]);

const PopularSlider = ({ dir, list }) => (
    <div className="popular__list">
        <Swiper
            loop
            speed={10000}
            dir={dir}
            slidesPerView={'auto'}
            spaceBetween={6}
            freeMode
            autoplay={{
                "delay": 0,
                "disableOnInteraction": false
            }}
        >
            {list.map((img, i) => <SwiperSlide key={i}>
                <div className="popular__img">
                    <div className="img-container">
                        <EasyImage image={img.logo} />
                    </div>
                </div>
            </SwiperSlide>)}
        </Swiper>
    </div>
)

const Popular = ({ popular }) => {
    console.log('popular', popular)
    return (
        <div className="popular">
            <h2 className="popular__title title">{popular.title}</h2>
            <div className="popular__text text">{popular.subtitle}</div>
            <PopularSlider list={popular.list} />
            <PopularSlider dir="rtl" list={popular.list} />
            <PopularSlider list={popular.list.reverse()} />
        </div>
    )
}
export default Popular
