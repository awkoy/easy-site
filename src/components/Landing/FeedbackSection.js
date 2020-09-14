import React from 'react'

import feed1 from '../../img/coment_1.png'
import feed2 from '../../img/coment_2.png'
import feed3 from '../../img/coment_3.png'

const FeedbackSection = () => {
    return (
        <section className="landing-feedback">
        <div className="container">
          <h2 className="landing-feedback__title">
            Відгуки клієнтів
          </h2>
          <div className="landing-feedback__list">
            <img src={feed1}/>
            <img src={feed2}/>
            <img src={feed3}/>
          </div>
        </div>
      </section>
    )
}

export default FeedbackSection;