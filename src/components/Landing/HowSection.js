import React, { useState } from 'react'

import DownloadApp from '../DownloadApp';

const HowSection = () => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <section className="landing-how">
            <div className="container">
                <h2 className="title">Як це працює?</h2>
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
                    <div className={`landing-how__content ${activeTab === 0 ? 'is-active' : ''}`}>
                        <div className="landing-how__step">
                            <div className="landing-how__step-count">1</div>
                            <div className="landing-how__step-title">Отримайте «Easy адресу» складу в США або Китаї</div>
                            <div className="landing-how__step-text">Це адреса складу EasyGet, куди інтернет-магазин вiдправить ваше замовлення</div>
                        </div>
                        <div className="landing-how__step">
                            <div className="landing-how__step-count">2</div>
                            <div className="landing-how__step-title">Самостiйно придбайте товар в інтернет-магазинi</div>
                            <div className="landing-how__step-text">закордоном, та вкажіть «Easy адресу» складу як адресу доставки</div>
                        </div>
                        <div className="landing-how__step">
                            <div className="landing-how__step-count">3</div>
                            <div className="landing-how__step-title">Дочекайтеся прибуття товару на склад «EasyGet»</div>
                            <div className="landing-how__step-text">перевiрте сфотографований нами товар та сплатiть доставку</div>
                        </div>
                        <div className="landing-how__step">
                            <div className="landing-how__step-count">4</div>
                            <div className="landing-how__step-title">Отримайте товар у відділеннi «Нової Пошти»</div>
                            <div className="landing-how__step-text">або кур'єром за вашою адресою</div>
                        </div>
                    </div>
                    <div className={`landing-how__content ${activeTab === 1 ? 'is-active' : ''}`}>
                        <div className="landing-how__step">
                            <div className="landing-how__step-count">1</div>
                            <div className="landing-how__step-title">1Отримайте «Easy адресу» складу в США або Китаї</div>
                            <div className="landing-how__step-text">Це адреса складу EasyGet, куди інтернет-магазин вiдправить ваше замовлення</div>
                        </div>
                        <div className="landing-how__step">
                            <div className="landing-how__step-count">2</div>
                            <div className="landing-how__step-title">1Самостiйно придбайте товар в інтернет-магазинi</div>
                            <div className="landing-how__step-text">закордоном, та вкажіть «Easy адресу» складу як адресу доставки</div>
                        </div>
                        <div className="landing-how__step">
                            <div className="landing-how__step-count">3</div>
                            <div className="landing-how__step-title">1Дочекайтеся прибуття товару на склад «EasyGet»</div>
                            <div className="landing-how__step-text">перевiрте сфотографований нами товар та сплатiть доставку</div>
                        </div>
                        <div className="landing-how__step">
                            <div className="landing-how__step-count">4</div>
                            <div className="landing-how__step-title">1Отримайте товар у відділеннi «Нової Пошти»</div>
                            <div className="landing-how__step-text">або кур'єром за вашою адресою</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowSection;