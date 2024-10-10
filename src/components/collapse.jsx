import './collapse.scss'
import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";


export default function Collapse({titleLevel, titleContent, children}) {
    const [collapse, setCollapse] = React.useState(false)
    function handleClick() {
        setCollapse(!collapse)
    }
    return(
        <div className='details'>
            <CollapseTitle level={titleLevel} content={titleContent} handleClick={handleClick} className="details__title" ></CollapseTitle>
            <div className={collapse ? 'show' + ' details__content' : 'hide' + ' details__content'}>{children}</div>
        </div>
    )
}

function CollapseTitle({level, content, handleClick, className}) {
    if (level>6 || level<1) {
        throw new Error('Title level must be in range 6-1')
    }
    return React.createElement(
        `h${level}`,
        {
            onClick: handleClick,
            className: className
        },
        content,
        <FontAwesomeIcon icon={faChevronUp}/>
    )
}