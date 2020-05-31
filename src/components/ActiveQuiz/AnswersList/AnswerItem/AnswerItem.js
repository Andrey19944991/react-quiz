import React from "react";
import "./AnswerItem.css"

export default props => {
    return (
        <li className="AnswerItem">
            {props.answer.text}
        </li>
    )
}
