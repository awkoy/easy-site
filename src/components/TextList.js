import React from 'react'
import Collapse, { Panel } from 'rc-collapse/es/index'
import motion from '../_utils/motion'
import 'rc-collapse/assets/index.css'
import { IconArrow } from './Common/icons'

const TextList = ({ textlist }) => {
    return (
        <Collapse className="easy-list" accordion={true} openMotion={motion} expandIcon={IconArrow}>
            {textlist.map(({ title, text }, i) => <Panel key={i} header={title} headerClass="my-header-class">{text}</Panel>)}
        </Collapse>
    )
}

export default TextList;