import React from "react";
import "./Quiz.css"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
    state = {
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                id:1,
                question: "Какого цвета небо ?",
                rightAnswer: 1,
                answers: [
                    { text: "Синий", id: 1 },
                    { text: "Красный", id: 2 },
                    { text: "Зеленый", id: 3 },
                    { text: "Белый", id: 4 }
                ]
            },
            {
                id:2,
                question: "В каком году основали Санкт-Петербург ?",
                rightAnswer: 4,
                answers: [
                    { text: "1700", id: 1 },
                    { text: "1701", id: 2 },
                    { text: "1702", id: 3 },
                    { text: "1703", id: 4 }
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === "success") {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];
        if (answerId === question.rightAnswer) {

            this.setState({
                answerState: { [answerId]: "success"}
            });

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        activeQuestion: 0,
                        answerState: null
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    });
                }

                window.clearTimeout(timeout);
            }, 1000);

        } else {
            this.setState({
                answerState: { [answerId]: "error"}
            })
        }
    }

    isQuizFinished(){
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className="Quiz">

                <div className="QuizWrapper">
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;