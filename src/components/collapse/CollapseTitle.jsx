import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import './collapse-title.scss'

export default function CollapseTitle({level, content, handleClick, className}) {
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