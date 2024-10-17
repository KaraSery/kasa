import './collapse.scss'
import React from 'react'
import CollapseTitle from "./CollapseTitle.jsx";


export default function Collapse({titleLevel, titleContent, children}) {
    const [collapse, setCollapse] = React.useState(false)
    function handleClick() {
        setCollapse(!collapse)
    }
    return(
        <article className='details'>
            <CollapseTitle level={titleLevel} content={titleContent} handleClick={handleClick} className="details__title" ></CollapseTitle>
            <div className={collapse ? 'show' + ' details__content' : 'hide' + ' details__content'}>{children}</div>
        </article>
    )
}