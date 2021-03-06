import CMS from 'netlify-cms-app'
import './cms.scss'

import CustomPagePreview from './preview-templates/CustomPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import InfoPagePreview from './preview-templates/InfoPagePreview'
import TurkeyPagePreview from './preview-templates/TurkeyPagePreview'

['rozmytnennia-eg', 'rozmytnennia-np', 'poryadok-utylizatsii-tovariv', 'poriadok-povernennia-tovariv', 'zaboroneni-tovary', 'obrobka-dannih', 'kliyentam'].forEach(name => CMS.registerPreviewTemplate(name, InfoPagePreview))
CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('custom-pages', CustomPagePreview)
CMS.registerPreviewTemplate('turkey', TurkeyPagePreview)