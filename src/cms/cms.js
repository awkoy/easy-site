import CMS from 'netlify-cms-app'
import './cms.scss'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import InfoPagePreview from './preview-templates/InfoPagePreview'

['rozmytnennia-eg', 'rozmytnennia-np', 'poryadok-utylizatsii-tovariv', 'poriadok-povernennia-tovariv', 'zaboroneni-tovary', 'obrobka-dannih', 'kliyentam'].forEach(name => CMS.registerPreviewTemplate(name, InfoPagePreview))
CMS.registerPreviewTemplate('index', IndexPagePreview)
