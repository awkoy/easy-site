import React from 'react'

import planeImg from '../../img/plane.svg'
import planeStart from '../../img/plane-start.svg'
import planeEnd from '../../img/plane-end.svg'

const PriceSection = () => {
  return (
    <section className="landing-price is-rounded-bottom" id="price">
      <img src={planeStart} alt="" className="landing-price__plane-start"/>
      <img src={planeEnd} alt="" className="landing-price__plane-end"/>
      <div className="container">
        <h2 className="title">Скільки це коштує</h2>
        <div className="landing-price__items">
          <div className="landing-price__item">
            <div className="landing-price__item-value">
              3.95$
            </div>
            <div className="landing-price__item-label">
              США / 0,5кг
            </div>
          </div>
          <div className="landing-price__item is-main">
            <div className="landing-price__item-label">
              <img src={planeImg} alt="Price plane" />
                Доставка
              </div>
            <div className="landing-price__item-value">
              від 8 робочих
              <span>днів</span>
            </div>
          </div>
          <div className="landing-price__item">
            <div className="landing-price__item-value">
              7$
            </div>
            <div className="landing-price__item-label">
              Китай / 0,5кг
            </div>
          </div>
        </div>
        <div className="landing-price__buy">
          <div className="landing-price__buy-title">Послуга «Купити товар за мене»</div>
          <div className="landing-price__buy-value">
              <span>7%</span>
              Від вартості товару
            </div>
        </div>
      </div>
    </section>
  )
}

export default PriceSection;