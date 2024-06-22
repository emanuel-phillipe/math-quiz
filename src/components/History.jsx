import React, { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import HistoryOption from './HistoryOption'

function HistoryPage({hidden, setHidden}) {

  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className='absolute top-0 left-0 w-full h-screen backdrop-blur-[3px] z-10 transition-all' hidden={!hidden} onClick={() => setHidden()}>
      <div className='w-full flex justify-center h-screen items-center'>
        <div className='bg-zinc-100 w-max flex gap-4 p-3 rounded-xl'>

          {
            quizState.history.map((quiz, index) => {
              return (<HistoryOption title={"Matemática"} score={quiz.score} timeNeeded={quiz.timeNeeded} key={index} date={quiz.date}/>)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default HistoryPage