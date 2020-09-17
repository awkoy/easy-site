import React, { useState } from 'react'

import DownloadApp from '../DownloadApp';

const HowSection = ({how_title, how_steps}) => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <section className="landing-how">
            <div className="container">
                <h2 className="title">{how_title}</h2>
                <div className="landing-how__tabs">
                    <div onClick={() => setActiveTab(0)} className={`landing-how__tab ${activeTab === 0 ? 'is-active' : ''}`}>Замовлення доставки</div>
                    <div onClick={() => setActiveTab(1)} className={`landing-how__tab ${activeTab === 1 ? 'is-active' : ''}`}>Покупка товару за мене</div>
                </div>
                <div className="landing-how__download">
                    <DownloadApp dark>
                        <span>Завантажте додаток</span> та замовте доставку
                    </DownloadApp>
                </div>
                <div className="landing-how__container">
                    {Object.values(how_steps).map((steps, i) => (
                        <div key={i} className={`landing-how__content ${activeTab === i ? 'is-active' : ''}`}>
                            {steps.map(({title, text}, i) => (
                                <div key={i} className="landing-how__step">
                                    <div className="landing-how__step-count">{i + 1}</div>
                                    <div className="landing-how__step-title">{title}</div>
                                    <div className="landing-how__step-text">{text}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowSection;