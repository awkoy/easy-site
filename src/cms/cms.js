import CMS from 'netlify-cms-app'
import './cms.scss'

import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
