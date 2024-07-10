import { useContext, useEffect, useState } from "react"
import { QuizContext } from "../context/quiz"
import QuizOption from "./QuizOption"
import { ClockCounterClockwise, Plus } from "@phosphor-icons/react"
import HistoryPage from "./History"
import { Skeleton } from "@mui/material"

export function WelcomePage(){
  const [quizState, dispatch] = useContext(QuizContext)
  const [history, setHistory] = useState(false)

  useEffect(() => {
    fetch(import.meta.env.VITE_API + "/all").then(response => response.json())
    .then(data=> {
      dispatch({type: "UPDATE_QUIZES", payload: {quizes: data}})
    })
  })

  return (
    <div className="py-[2rem] md:py-10">

      <HistoryPage hidden={history} setHidden={() => setHistory(false)}/>

      <header className="flex justify-between backdrop-blur-sm">
        <div>
          <h1 className="text-4xl font-bold">Quiz</h1>
          <p className="text-zinc-500 mr-5">Seja muuito bem-vindo(a)! Para começar, é só clicar em algum quiz!</p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row">

          <div className="p-2 bg-zinc-100 text-zinc-600 h-max rounded-lg cursor-not-allowed transition-all" onClick={() => setHistory(false)}>
            <ClockCounterClockwise size={22} alt="Em desenvolvimento"/>
          </div>

          <div className="bg-zinc-100 flex h-max items-center gap-2 rounded-[0.5rem] p-2 w-max hover:bg-zinc-200 transition-all cursor-pointer" onClick={() => dispatch({type: "QUIZ_CREATION"})}>
            <Plus size={22} alt="Criar quiz"/>
        </div>

        </div>
        
      </header>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 grid-rows-5">

        {
          quizState.subjects.map((subject, index) => {
            return (<QuizOption key={index} title={subject.title} desc={subject.questions.length + " questões objetivas"} disabled={false} click={() => dispatch({type: "SELECT_QUESTION_AND_SORT", payload: {index}})}/>)
          })
        }

      </div>

    </div>
  )
}
