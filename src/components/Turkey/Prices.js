import React from 'react'
import DownloadApp from '../DownloadApp';

const Prices = ({prices}) => {
    return (
        <section className="turkey-prices">
            <div className="container">
                <div className="turkey-prices__content">
                    <h2 className="turkey-prices__title title">{prices.title}</h2>
                    <div className="turkey-prices__text text">{prices.text}</div>
                    <div className="turkey-prices__cost text">{prices.price}</div>
                    <DownloadApp />
                </div>
            </div>
        </section>
    )
}
export default Prices;
