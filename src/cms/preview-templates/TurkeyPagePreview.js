import React from 'react'
import PropTypes from 'prop-types'
import { TurkeyPageTemplate } from '../../templates/turkey-page'

const TurkeyPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <TurkeyPageTemplate
                easy={data.easy}
                turkey_images={data.turkey_images}
                profit={data.profit}
                how={data.how}
                popular={data.popular}
                about={data.about}
                service={data.service}
                why={data.why}
                prices={data.prices}
                feedbacks={data.feedbacks}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

TurkeyPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default TurkeyPagePreview