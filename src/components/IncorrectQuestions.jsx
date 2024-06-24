import React, { useContext, useEffect, useState } from 'react'
import { QuizContext } from '../context/quiz'
import Latex from 'react-latex'
import OptionIncorrect from './OptionIncorrect'
import { ArrowLeft } from '@phosphor-icons/react'
import MathText from './MathText'
import { GoogleGenerativeAI } from '@google/generative-ai'

function IncorrectQuestions() {

  const [quizState, dispatch] = useContext(QuizContext)
  const [selectedQuestion, setSelectedQuestion] = useState(0)
  const [corrections, setCorrections] = useState([])
  const [currentCorrection, setCurrentCorrect] = useState(() => {
    if(corrections != []){
      corrections.map((current) => {
        if(current.index == selectedQuestion) return current.text
        else return "-"
      })
    }else {
      return "-"
    }
  })

  useEffect(() => {
    setCurrentCorrect(corrections.map((current) => {
      if(current.index == selectedQuestion) return current.text
      else return "-"
    }), [setCurrentCorrect, corrections, selectedQuestion])
  })
  
  const correctGemini = async () => {

    const currentQuestion = selectedQuestion;

    const genAi = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY)
    const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash"})
    var prompt = "Explique o motivo da questão '" + quizState.incorrectQuestions[currentQuestion].questionObject.question + "' Ter a opção " + quizState.incorrectQuestions[currentQuestion].questionObject.answer + " como correta."
    
    var result = await model.generateContent(prompt.toString());
    var response = await result.response;
    var text = response.text();

    var existingCorrection = corrections
    var exist = null;

    corrections.map((correction, index) => {
      if(correction.index === currentQuestion) exist = index
    })

    if(exist){
      existingCorrection[exist].text = text
      
      setCorrections(existingCorrection)
    }
    else setCorrections((current) => [...current, {
      index: currentQuestion,
      text,
    }])
    
  }

  return (
    <div className='py-20 px-[0.5rem] xl:px-[8rem]'>

      <div className='flex mb-5 gap-3 justify-between'>
        <div onClick={() => dispatch({type: "QUIZ_END"})} className='p-2 px-4 text-center flex items-center cursor-pointer transition-all rounded-lg w-max font-medium bg-zinc-100 hover:bg-zinc-200'>
          <ArrowLeft size={20} weight='bold' alt='Voltar para a página anterior'/>
        </div>

        <div onClick={() => correctGemini()} className='p-2 px-4 text-center cursor-pointer transition-all rounded-lg w-full font-medium bg-zinc-100 hover:bg-zinc-200'>
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

        <div className='text-justify w-full'>
          <MathText>{currentCorrection}</MathText>
        </div>

    </div>
  )
}

export default IncorrectQuestions