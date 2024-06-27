import { useContext, useEffect } from "react";
import { Question } from "./components/Question";
import { WelcomePage } from "./components/WelcomePage";
import { QuizContext } from "./context/quiz";
import GameEnd from "./components/GameEnd";
import IncorrectQuestions from "./components/IncorrectQuestions";
import {QuestionCreation} from "./components/QuizCreation/QuestionCreation";

export function App() {
  const [quizState, dispatch] = useContext(QuizContext)


  return (
    <div className="">
      {quizState.gameStage === "Start" && <WelcomePage />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameEnd />}
      {quizState.gameStage === "Incorrects" && <IncorrectQuestions />}
      {quizState.gameStage === "Creation" && <QuestionCreation />}
    </div>
  )
}