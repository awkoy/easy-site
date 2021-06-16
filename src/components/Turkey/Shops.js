import React from 'react'
import { useState } from 'react'

const categoryList = [
    { label: "Одяг", value: "clothes" },
    { label: "Взуття", value: "shoes" },
    { label: "Текстиль", value: "textile" },
    { label: "Дитячий світ", value: "kids" },
    { label: "Для дому", value: "home" },
    { label: "Прикраси", value: "jewerly" }
]
const ShopsCategories = ({selectedCategory, onSelect}) => (
    <div className="turkey-shops__category-list">
        {categoryList.map(({ label, value }) => {
            const classnames = `turkey-shops__category-item ${value === selectedCategory ? 'isActive' : ''}`
            return (<div onClick={onSelect} className={classnames}>{label}</div>)})}
    </div>
)

const Shops = ({ shops }) => {
    const [selectedCategory, setSelectedCategory] = useState(categoryList[0].value);
    const selectedShops = shops.shopslist.filter(shop => shop.category.value === selectedCategory)
    console.log('selectedShops', selectedShops)
    return (
        <section className="turkey-shops">
            <div className="container">
                <div className="turkey-shops__title">{shops.title}</div>
                <ShopsCategories 
                    selectedCategory={selectedCategory} 
                    onSelect={() => setSelectedCategory(value)} />
                <div className="turkey-shops__content">
                    <div className="turkey-shops__slider">

                    </div>
                    <div className="turkey-shops__current-shop">
                        <div className="turkey-shops__current-shop__about">
                            <div className="turkey-shops__current-shop__title">

                            </div>
                            <div className="turkey-shops__current-shop__text text">

                            </div>
                            <div className="turkey-shops__current-shop__btn btn">
                                Обрати товар
                            </div>
                        </div>
                        <div className="turkey-shops__current-shop__prices">
                            <div className="turkey-shops__current-shop__prices__item">
                                <span></span><b></b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Shops;
