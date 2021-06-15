import React from 'react'
import EasyImage from '../Common/EasyImg'
import DownloadApp from '../DownloadApp'

const About = ({ about }) => {
    return (
        <section className="landing-okay">
            <div className="container">
                <div className="landing-okay__left">
                    <EasyImage image={about.image} />
                </div>
                <div className="landing-okay__right">
                    <h2 className="landing-okay__title title">
                        {about.title}
                    </h2>
                    <ul className="landing-okay__list">
                        {about.list.map(({ text, title }, i) => (
                            <li key={i} className="landing-okay__list-item">
                                <span>{title}</span>
                                {text}
                            </li>
                        ))}
                    </ul>
                    <DownloadApp />
                </div>
            </div>
        </section>
    )
}
export default About
