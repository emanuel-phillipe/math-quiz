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
    fetch(import.meta.env.VITE_API + "/api/quiz/").then(response => response.json())
    .then(data=> {
      dispatch({type: "UPDATE_QUIZES", payload: {quizes: data}})
    })
  })

  return (
    <div className="py-[2rem] md:py-10">

      <HistoryPage hidden={history} setHidden={() => setHistory(false)}/>

      <div className="flex justify-between">
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
        
      </div>

      <div className="mt-10 grid gap-1 lg:grid-cols-1 gap-3 grid-rows-5">

        {
          quizState.subjects.map((subject, index) => {
            return (<QuizOption key={index} title={subject.title} desc={subject.questions.length + " questões objetivas"} disabled={false} click={() => dispatch({type: "SELECT_QUESTION_AND_SORT", payload: {index}})}/>)
          })
        }

      </div>

      <footer className="absolute bottom-0 left-0 mb-5 px-6 w-full md:left-auto md:px-0 md:w-max">
        <div className="flex gap-3">
          <div className="border-zinc-300 border-[0.7px] text-center p-2 px-4 rounded-lg w-full md:text-left md:w-max">
            <p className="font-medium text-zinc-700">Trabalho Trilha</p>
            <p className="font-normal text-[0.9rem] text-zinc-500">Quiz</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
