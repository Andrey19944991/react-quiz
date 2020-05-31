import React from "react";
import "./AnswersList.css"
import AnswerItem from "./AnswerItem/AnswerItem";

export default props => (
    <ul>
        {props.answers.map((answer, index) => (
            <AnswerItem
                answer={answer}
                key={index}
            />
        ))}
    </ul>
)