import React from 'react'
import { useState } from 'react'
import ShopsSlider from '../Common/ShopsSlider';

const categoryList = [
    { label: "Одяг", value: "clothes" },
    { label: "Взуття", value: "shoes" },
    { label: "Текстиль", value: "textile" },
    { label: "Дитячий світ", value: "kids" },
    { label: "Для дому", value: "home" },
    { label: "Прикраси", value: "jewerly" }
]
const ShopsCategories = ({ selectedCategory, onSelect }) => (
    <div className="landing-how__tabs">
        {categoryList.map(({ label, value }) => {
            const classnames = `landing-how__tab ${value === selectedCategory ? 'is-active' : ''}`
            return (
                <div key={label} role="button" tabIndex={0} onClick={() => onSelect(value)} onKeyPress={() => onSelect(value)} className={classnames}>{label}</div>)
        })}
    </div>
)

const Shops = ({ shops }) => {
    const [selectedCategory, setSelectedCategory] = useState(categoryList[0].value)
    const selectedShops = shops.shopslist.filter(shop => shop.category === selectedCategory)
    console.log('selectedShops', selectedShops, selectedCategory, shops)
    return (
        <section className="turkey-shops is-rounded-bottom">
            <div className="container">
                <div className="turkey-shops__title text">{shops.title}</div>
                <ShopsCategories
                    selectedCategory={selectedCategory}
                    onSelect={(value) => setSelectedCategory(value)} />
                {selectedShops.length ? <ShopsSlider list={selectedShops} /> : null}
            </div>
        </section>
    )
}
export default Shops;
