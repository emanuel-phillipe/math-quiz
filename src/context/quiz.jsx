import { createContext, useReducer } from "react";
import { mathQuestions } from "../data/questions";

const stages = ["Start", "Playing", "End"];

const initialState = {
  gameStage: stages[0],
  questions: mathQuestions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
  timeNeeded: {minutes: 0, seconds: 0}
}

const quizReducer = (state, action) => {

  switch(action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: stages[1]
      }
    case "UPDATE_TIME":
      return {
        ...state,
        timeNeeded: {
          minutes: state.timeNeeded.seconds === 59 ? state.timeNeeded.minutes + 1 : state.timeNeeded.minutes,
          seconds: state.timeNeeded.seconds === 59 ? 0 : state.timeNeeded.seconds + 1,
        }
      }
    case "REORDER_QUESTIONS":
      var reordered = mathQuestions.sort(() => {
        return Math.random() - 0.5 //EMBARALHAR
      })

      return {
        ...state,
        questions: reordered
      }
    case "CHANGE_QUESTION":
      var nextQuestion = state.currentQuestion + 1
      var endgame = false

      if(!state.questions[nextQuestion]) {
        endgame = true
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endgame ? stages[2] : state.gameStage,
        answerSelected: false,
      }
    case "NEW_GAME":
      return initialState
    case "UPDATE_ANSWER":
      var optionUpdated = action.payload.option

      return {
        ...state,
        answerSelected: optionUpdated
      }
    case "CONCLUDE_ANSWER":

      var answer = action.payload.answer
      var option = action.payload.option

      var correctAnswer = 0

      if(answer == option) correctAnswer = 1

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      }
    default:
      return state
  }
}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {

  const value = useReducer(quizReducer, initialState)

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}