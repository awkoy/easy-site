import React from 'react'
import EasyImage from '../Common/EasyImg'
import planeStart from '../../img/plane-start.svg'
import planeEnd from '../../img/plane-end.svg'

const Services = ({ service }) => {
    return (
        <section className="our-service">
            <img src={planeStart} alt="" className="landing-price__plane-start"/>
            <img src={planeEnd} alt="" className="landing-price__plane-end"/>
            <div className="container">
                <h2 className="title our-service__title">{service.title}</h2>
                <div className="our-service__about">
                    <div className="our-service__about__delivery">
                        <div className="our-service__about__img">
                            <EasyImage image={service.delivery.image} />
                        </div>
                        <div className="our-service__about__title">
                            {service.delivery.title}
                        </div>
                        <div className="our-service__about__text text">
                            {service.delivery.text}
                        </div>
                    </div>
                    <div className="our-service__about__buy">
                        <div className="our-service__about__img">
                            <EasyImage image={service.buy.image} />
                        </div>
                        <div className="our-service__about__title">
                            {service.buy.title}
                        </div>
                        <div className="our-service__about__text text">
                            {service.buy.text}
                        </div>
                    </div>
                </div>
                <div className="our-service__list">
                    {service.servicelist.map(({ title, image }) => (
                        <div key={title} className="our-service__item">
                            <div className="our-service__item__img">
                                <EasyImage image={image} />
                            </div>
                            <div className="our-service__item__title">
                                {title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Services;
