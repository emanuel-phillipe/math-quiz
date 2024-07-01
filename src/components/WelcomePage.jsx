import { useContext, useEffect, useState } from "react"
import { QuizContext } from "../context/quiz"
import QuizOption from "./QuizOption"
import { ClockCounterClockwise, Plus } from "@phosphor-icons/react"
import HistoryPage from "./History"

export function WelcomePage(){
  const [quizState, dispatch] = useContext(QuizContext)
  const [history, setHistory] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3030/api/quiz/all").then(response => response.json())
    .then(data=> {
      dispatch({type: "UPDATE_QUIZES", payload: {quizes: data}})
    })
  })

  return (
    <div className="py-12">

      <HistoryPage hidden={history} setHidden={() => setHistory(false)}/>

      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-bold">Quiz</h1>
          <p className="text-zinc-500">Seja muuito bem-vindo(a)! Para começar, é só clicar em algum quiz!</p>
        </div>

        <div className="flex gap-3">

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

      <footer className="absolute bottom-0 mb-12">
        <div className="flex gap-3">
          <div className="bg-zinc-50 p-2 px-4 rounded-lg w-max">
            <p className="font-medium text-zinc-700">Trabalho Trilha</p>
            <p className="font-normal text-[0.9rem] text-zinc-500">Pensamento Computacional (PCP)</p>
          </div>

          <div className="bg-zinc-50 p-2 px-4 rounded-lg">
            <p className="font-medium text-zinc-700">Participantes</p>
            <p className="font-normal text-[0.9rem] text-zinc-500">Ana Carolina, Emanuel Phillipe, Gabriel Damasio, Luciana Gomes, Marcos Contijo</p>
          </div>
        </div>
      </footer>

    </div>
  )
}