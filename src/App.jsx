import { useContext, useEffect } from "react";
import { Question } from "./components/Question";
import { WelcomePage } from "./components/WelcomePage";
import { QuizContext } from "./context/quiz";
import GameEnd from "./components/GameEnd";

export function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    //serve para embaralhar as perguntas
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])

  return (
    <div className="">
      {quizState.gameStage === "Start" && <WelcomePage />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameEnd />}
    </div>
  )
}