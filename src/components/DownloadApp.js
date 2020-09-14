import React from 'react'

import androidIcon from '../img/android.svg';
import appleIcon from '../img/apple.svg';

const DownloadApp = ({ dark, children }) => {
    return (
        <div className={`download-app ${dark ? 'is-dark' : ''}`}>
            {children ? children : <div className="download-app__title">Завантажуйте</div>}
            <div className="download-app__btns">
                <a href="" className="download-app__btn download-app__btn--android">
                    <img src={androidIcon} alt="Android App Store" />
                </a>
                <a href="" className="download-app__btn download-app__btn--ios">
                    <img src={appleIcon} alt="Apple App Store" />
                </a>
            </div>
        </div>
    )
}

export default DownloadApp;