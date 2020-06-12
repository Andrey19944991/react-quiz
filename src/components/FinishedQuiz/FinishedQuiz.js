import React from "react";
import "./FinishedQuiz.css"

export default props => {

    const successCount = Object.keys(props.results).reduce((result, key) => {
        if (props.results[key] === "success") {
            result++
        }
        return result;
    }, 0);

    return (
        <div className="FinishedQuiz">
            <ul>
                {props.quiz.map( (quizItem,index) => {

                    const clc = [
                        "fa",
                        props.results[quizItem.id] === "error" ?  "fa-times": "fa-check",
                        props.results[quizItem.id]
                    ];

                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={clc.join(" ")}/>
                        </li>
                    )
                })}
            </ul>

            <p> Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <button onClick={props.onRetry}>Повторить</button>
            </div>
        </div>
    )
}