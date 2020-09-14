import React from 'react'
import mainlogo from '../../img/main-logo.svg'

import easy1 from '../../img/easy1.png'
import easy2 from '../../img/easy2.png'
import easy3 from '../../img/easy3.png'
import easy4 from '../../img/easy4.png'
import easy5 from '../../img/easy5.png'

const EeasySection = ({title}) => {
    return (
        <section className="landing-easy is-rounded-bottom">
            <div className="container">
                <img src={mainlogo} alt="Main logo" className="landing-easy__logo" />
                <h1 className="main-title">
                    Доставка та викуп <span>з США та Китаю</span>
                </h1>
                <div className="landing-easy__subtitle text">{title}</div>

                <div className="landing-easy__img landing-easy__img1">
                    <img src={easy1} alt=""/>
                </div>
                <div className="landing-easy__img landing-easy__img2">
                    <img src={easy2} alt=""/>
                </div>
                <div className="landing-easy__img landing-easy__img3">
                    <img src={easy3} alt=""/>
                </div>
                <div className="landing-easy__img landing-easy__img4">
                    <img src={easy4} alt=""/>
                </div>
                <div className="landing-easy__img landing-easy__img5">
                    <img src={easy5} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default EeasySection;