import React from 'react'

import easyLogo from '../../img/main-logo.svg'
import mistLogo from '../../img/mist-logo.svg'
import inuaLogo from '../../img/inua-logo.svg'
import npLogo from '../../img/np-logo.svg'

const CompareSection = () => {
    return (
        <section className="landing-compare is-rounded-top">
            <div className="container">
                <h2 className="landing-compare__title">
                    Чому ми краще
                </h2>
                <div className="landing-compare__table">
                    <div className="landing-compare__table-cols">
                        <div className="landing-compare__table-col"></div>
                        <div className="landing-compare__table-col">
                            Термін доставки
                        </div>
                        <div className="landing-compare__table-col">
                            Вартість доставки з США
                        </div>
                        <div className="landing-compare__table-col">
                            Вартість доставки з Китаю
                        </div>
                    </div>
                    <div className="landing-compare__table-cols is-main">
                        <div className="landing-compare__table-col">
                            <img src={easyLogo} />
                        </div>
                        <div className="landing-compare__table-col">
                            7-14 днiв
                        </div>
                        <div className="landing-compare__table-col">
                            7-14 днiв
                        </div>
                        <div className="landing-compare__table-col">
                            7-14 днiв
                        </div>
                    </div>
                    <div className="landing-compare__table-cols">
                        <div className="landing-compare__table-col">
                            <img src={mistLogo} />
                        </div>
                        <div className="landing-compare__table-col">
                            7-14 днiв
                        </div>
                        <div className="landing-compare__table-col">
                            7-14 днiв
                        </div>
                        <div className="landing-compare__table-col">
                            7-14 днiв
                        </div>
                    </div>
                    <div className="landing-compare__table-cols">
                        <div className="landing-compare__table-col">
                            <img src={inuaLogo} />
                        </div>
                        <div className="landing-compare__table-col">
                            7-14 днiв
                        </div>
                        <div className="landing-compare__table-col">
                            7-14 днiв
                        </div>
                        <div className="landing-compare__table-col">
                            7-14 днiв
                        </div>
                    </div>
                    <div className="landing-compare__table-cols">
                        <div className="landing-compare__table-col">
                            <img src={npLogo} />
                        </div>
                        <div className="landing-compare__table-col">
                            7-14 днiв
                        </div>
                        <div className="landing-compare__table-col">
                            7-14 днiв
                        </div>
                        <div className="landing-compare__table-col">
                            7-14 днiв
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompareSection;