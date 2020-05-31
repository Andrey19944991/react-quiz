import React from "react";
import "./Quiz.css"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
    state = {
        quiz: [
            {
                answers: [
                    { text: "Вопрос1" },
                    { text: "Вопрос2" },
                    { text: "Вопрос3" },
                    { text: "Вопрос4" }
                ]
            }
        ]
    }
    render() {
        return (
            <div className="Quiz">

                <div className="QuizWrapper">
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[0].answers}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;