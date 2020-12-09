import React from 'react'
import EasyImg from './Common/EasyImg.js'

const ProductList = ({ productlist }) => {
    return (
        <div className="easy-product-list">
            {productlist.map((p, i) => <a href={p.link} key={i} className="easy-product" target="_blank" rel="noopener noreferrer">
                <EasyImg image={p.image} />
                <div className="easy-product__details">
                    <div className="easy-product__details-name">{p.name}</div>
                    <div className="easy-product__details-price">{p.price}</div>
                </div>
            </a>)}
        </div>
    )
}

export default ProductList;