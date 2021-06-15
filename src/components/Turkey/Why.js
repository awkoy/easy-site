import React from 'react'
import EasyImage from '../Common/EasyImg';

const Why = ({ why }) => {
    return (
        <section className="turkey-why">
            <div className="container">
                <h2 className="title turkey-why__title">{why.title}</h2>
                <div className="text turkey-why__subtitle">{why.subtitle}</div>
                <div className="turkey-why__list">
                    {why.list.map(({ image, title, text }) => (
                        <div className="turkey-why__item">
                            <div className="turkey-why__img">
                                <EasyImage image={image} />
                            </div>
                            <div className="turkey-why__item__title">{title}</div>
                            <div className="turkey-why__item__text text">{text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Why;
