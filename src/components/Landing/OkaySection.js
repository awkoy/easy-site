import React from 'react'

import  okayImg from '../../img/okay.png'

const OkaySection = () => {
    return (
        <section className="landing-okay">
            <div className="container">
                <div className="landing-okay__left">
                    <img src={okayImg} alt="Okay image"/>
                </div>
                <div className="landing-okay__right">
                    <h2 className="landing-okay__title title">
                        Немає проблем
                    </h2>
                    <ul className="landing-okay__list">
                        <li className="landing-okay__list-item">
                            Гарантовано отримаєте посилку у вашому відділенні “Нової Пошти” вашого міста
                        </li>
                        <li className="landing-okay__list-item">
                            Ви завжди будете знати де ваша посилка
                        </li>
                        <li className="landing-okay__list-item">
                            Один додаток EasyGet замінює 5 додатків та 3 сайти наших конкурентів
                        </li>
                        <li className="landing-okay__list-item">
                            Просто, зрозуміло, в декілька кліків і без проблем
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default OkaySection