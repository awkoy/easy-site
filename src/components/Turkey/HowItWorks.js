import React, { useState } from 'react'

import DownloadApp from '../DownloadApp';

const HowItWorks = ({how}) => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <section className="landing-how is-rounded-top">
            <div className="container">
                <h2 className="title">{how.title}</h2>
                <div className="landing-how__tabs">
                    <div role="button" tabIndex={0} onClick={() => setActiveTab(0)} onKeyPress={() => setActiveTab(0)} className={`landing-how__tab ${activeTab === 0 ? 'is-active' : ''}`}>Замовлення доставки</div>
                    <div role="button" tabIndex={0} onClick={() => setActiveTab(1)} onKeyPress={() => setActiveTab(1)} className={`landing-how__tab ${activeTab === 1 ? 'is-active' : ''}`}>Покупка товару за мене</div>
                </div>
                <div className="landing-how__container">
                    {[how.order_steps, how.buy_steps].map((steps, i) => (
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

export default HowItWorks;