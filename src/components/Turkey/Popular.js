import React from 'react'
import EasyImage from '../Common/EasyImg'

const Popular = ({ popular }) => {
    return (
        <div className="popular">
            <h2 className="popular__title title">{popular.title}</h2>
            <div className="popular__text text">{popular.subtitle}</div>
            <div className="popular__list">
                {popular.list.map(img => <div className="popular__img"><EasyImage image={img} /></div>)}
            </div>
        </div>
    )
}
export default Popular
