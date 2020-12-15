import React from 'react'
import PropTypes from 'prop-types'
import { CustomPageTemplate } from '../../templates/custom-page'

const CustomPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <CustomPageTemplate
                title={data.title}
                subtitle={data.subtitle}
                textlist={data.textlist}
                productlist={data.productlist}
                preview={data.preview}
                calltoaction={data.calltoaction}
                content={widgetFor('body')}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

CustomPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default CustomPagePreview