import React from 'react'

import EasyImage from '../Common/EasyImg'

const FeedbackSection = ({feedbacks}) => {
    return (
        <section className="landing-feedback is-rounded-top">
        <div className="container">
          <h2 className="landing-feedback__title">
            {feedbacks.title}
          </h2>
          <div className="landing-feedback__list">
            {feedbacks.list.map(({feedback}, i) => <div key={i} className="landing-feedback__img"><EasyImage image={feedback} /></div>)}
          </div>
        </div>
      </section>
    )
}

export default FeedbackSection;