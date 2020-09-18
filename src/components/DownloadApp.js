import React from 'react'

import androidIcon from '../img/android.svg';
import appleIcon from '../img/apple.svg';
import webIcon from '../img/web.svg';
import { firebaseLog } from '../utils/analytics';

const DownloadApp = ({ dark, children }) => {
    return (
        <div className={`download-app ${dark ? 'is-dark' : ''}`}>
            {children ? children : <div className="download-app__title">Завантажуйте</div>}
            <div className="download-app__btns">
                <a onClick={() => firebaseLog('download_app')} href="https://play.google.com/store/apps/details?id=com.utec.easyget&referrer=utm_source%3Dsite%26utm_medium%3Dmain" target="_blank" rel="noopener noreferrer" className="download-app__btn download-app__btn--android">
                    <img src={androidIcon} alt="Android App Store" />
                </a>
                <a onClick={() => firebaseLog('download_app')} href="https://apps.apple.com/app/apple-store/id1473829534?pt=117926046&ct=site&mt=8" target="_blank" rel="noopener noreferrer" className="download-app__btn download-app__btn--ios">
                    <img src={appleIcon} alt="Apple App Store" />
                </a>
                <a onClick={() => firebaseLog('download_app')} href="https://app.easyget.com.ua/" target="_blank" rel="noopener noreferrer" className="download-app__btn download-app__btn--web">
                    <img src={webIcon} alt="Web version" />
                </a>
            </div>
        </div>
    )
}

export default DownloadApp;