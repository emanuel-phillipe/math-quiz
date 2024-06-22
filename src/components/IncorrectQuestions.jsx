import React, { useContext, useState } from 'react'
import { QuizContext } from '../context/quiz'
import Latex from 'react-latex'
import OptionIncorrect from './OptionIncorrect'
import { ArrowLeft } from '@phosphor-icons/react'

function IncorrectQuestions() {

  const [quizState, dispatch] = useContext(QuizContext)
  const [selectedQuestion, setSelectedQuestion] = useState(0)

  return (
    <div className='py-20 px-[0.5rem] xl:px-[20rem]'>

      <div className='flex mb-5 gap-3 justify-between'>
        <div onClick={() => dispatch({type: "QUIZ_END"})} className='p-2 px-4 text-center flex items-center cursor-pointer transition-all rounded-lg w-max font-medium bg-zinc-100 hover:bg-zinc-200'>
          <ArrowLeft size={20} weight='bold' alt='Voltar para a página anterior'/>
        </div>

        <div className='p-2 px-4 text-center cursor-pointer transition-all rounded-lg w-full font-medium bg-zinc-100 hover:bg-zinc-200'>
          <p>{'Gerar Explicação'}</p>
        </div>
      </div>

      <div className='flex gap-3 justify-between'>
        {
          quizState.incorrectQuestions.map((question, index) => {

            const style = selectedQuestion === index ? "p-2 px-4 text-center cursor-pointer transition-all rounded-lg w-full font-medium bg-zinc-200 border-[1.7px] border-zinc-400" : "p-2 px-4 text-center cursor-pointer hover:border-zinc-400 transition-all border-[1.7px] rounded-lg w-full font-medium border-zinc-300"

            return (
              <div key={index} onClick={() => {setSelectedQuestion(index)}} className={style}>{question.questionNumber + 1}</div>
            )
          })
        }
      </div>

      <div className="mt-3 text-justify text-zinc-800 text-[1rem]">
        <Latex colorIsTextColor={true}>
          {quizState.incorrectQuestions[selectedQuestion].questionObject.question}
        </Latex>
      </div>

      <div className="mt-3">
          {quizState.incorrectQuestions[selectedQuestion].questionObject.options.map((option, index) => { // COLOCA A COR DE ACORDO COM A SELEÇÃO
            const isCorrect = option === quizState.incorrectQuestions[selectedQuestion].questionObject.answer;

            var style;

            if(isCorrect){
              style = "border-green-400 bg-green-100 text-zinc-800"
            }else if(option === quizState.incorrectQuestions[selectedQuestion].option){
              style = "bg-zinc-100 border-zinc-400 text-zinc-800"
            }

            return (
              <OptionIncorrect key={index} index={index} latex={quizState.incorrectQuestions[selectedQuestion].questionObject.latex} option={option} styles={style}/>
            )
          })}
        </div>

    </div>
  )
}

export default IncorrectQuestions