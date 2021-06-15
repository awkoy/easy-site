import React from 'react'
import DownloadApp from '../DownloadApp';

const Prices = () => {
    return (
        <section className="turkey-prices">
            <div className="container">
                <div className="turkey-prices__content">
                    <div className="turkey-prices__title title"></div>
                    <div className="turkey-prices__text text"></div>
                    <div className="turkey-prices__cost text"></div>

                    <DownloadApp />
                </div>
            </div>
        </section>
    )
}
export default Prices;
