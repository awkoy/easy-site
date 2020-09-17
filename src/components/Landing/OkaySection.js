import React from 'react'
import EasyImage from '../Common/EasyImg'

const OkaySection = ({okay}) => {
    return (
        <section className="landing-okay">
            <div className="container">
                <div className="landing-okay__left">
                    <EasyImage image={okay.image} />
                </div>
                <div className="landing-okay__right">
                    <h2 className="landing-okay__title title">
                        {okay.title}
                    </h2>
                    <ul className="landing-okay__list">
                        {okay.list.map(({text}, i) => (
                            <li key={i} className="landing-okay__list-item">{text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default OkaySection