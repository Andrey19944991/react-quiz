import React from "react";
import "./ActiveQuiz.css"
import AnswersList from "./AnswersList/AnswersList";

export default props => (
    <div className="ActiveQuiz">
        <p className="Question">
            <span>
                <strong>{props.answerNumber}.</strong> &nbsp;
                {props.question}
            </span>
            <small>{props.answerNumber} из {props.quizLength}</small>
        </p>
        <AnswersList
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
            state={props.state}
        />
    </div>
)