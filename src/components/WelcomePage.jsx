import { useContext, useState } from "react"
import { QuizContext } from "../context/quiz"
import QuizOption from "./QuizOption"
import { ClockCounterClockwise } from "@phosphor-icons/react"
import HistoryPage from "./History"

export function WelcomePage(){
  const [quizState, dispatch] = useContext(QuizContext)
  const [history, setHistory] = useState(false)

  return (
    <div className="py-12">

      <HistoryPage hidden={history} setHidden={() => setHistory(false)}/>

      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-bold">Quiz</h1>
          <p className="text-zinc-500">Seja muuito bem-vindo(a)! Para começar, é só clicar em algum quiz!</p>
        </div>

        <div className="p-2 bg-zinc-100 h-max rounded-lg cursor-pointer hover:bg-zinc-200 transition-all" onClick={() => setHistory(true)}>
          <ClockCounterClockwise size={22} alt="Histórico"/>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-4 grid-rows-5 gap-4">

        <QuizOption click={() => dispatch({type: "CHANGE_STATE"})} title={'Matemática'} desc={'10 questões objetivas'}/>
        <QuizOption title={'Biologia'} desc={'12 questões objetivas'} disabled={true}/>
        <QuizOption title={'Química'} desc={'11 questões objetivas'} disabled={true}/>
        <QuizOption title={'Língua Portuguesa'} desc={'12 questões objetivas'} disabled={true}/>
        <QuizOption title={'História'} desc={'10 questões objetivas'} disabled={true}/>
        <QuizOption title={'Geografia'} desc={'10 questões objetivas'} disabled={true}/>
        <QuizOption title={'Física'} desc={'10 questões objetivas'} disabled={true}/>
        <QuizOption title={'Sociologia'} desc={'10 questões objetivas'} disabled={true}/>
        <QuizOption title={'Filosofia'} desc={'10 questões objetivas'} disabled={true}/>
        <QuizOption title={'Educação Física'} desc={'10 questões objetivas'} disabled={true}/>
        <QuizOption title={'Inglês'} desc={'12 questões objetivas'} disabled={true}/>

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