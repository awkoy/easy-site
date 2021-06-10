import React from 'react'
import EasyImage from '../Common/EasyImg';

const ProfitItem = ({ item }) => <div className="profit__item">
    <div className="profit__item-img">
        <EasyImage image={item.image} />
    </div>
    <div className="profit__item-title">{item.title}</div>
</div>

const Profit = ({ profit }) => {
    return (
        <div className="profit">
            <div className="container">
                <h2 className="profit__title title">{profit.title}</h2>
                <div className="profit__list">
                    {profit.things.map(item => <ProfitItem item={item} />)}
                </div>
            </div>
        </div>
    )
}
export default Profit;