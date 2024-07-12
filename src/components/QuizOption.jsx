import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'

function QuizOption({title, desc, questionNumber, click, subject}) {

  const classAndTextStyles = {
    div: "border-[0.7px] border-zinc-300 rounded-[0.5rem] p-3 px-4 w-full h-max hover:border-zinc-600 transition-all cursor-pointer",
    title: "text-[1.1rem] font-semibold",
    desc: "text-[0.9rem] text-zinc-600",
    questionsText: questionNumber == 1 ? questionNumber + " questão objetiva" : questionNumber + " questões objetivas"
  }

  const [creatorsWidget, setCreatorsWidget] = useState(false)

  return (
      <div onClick={click} onMouseEnter={() => {setCreatorsWidget(true)}} onMouseLeave={() => {setCreatorsWidget(false)}} className={classAndTextStyles.div}>
        <h3 className={classAndTextStyles.title}>{title}</h3>
        <p className={classAndTextStyles.desc}>{classAndTextStyles.questionsText}</p>

        {
          !isMobile ? <div className='mt-4 flex gap-3'>
          {
            subject.nameCreator.map((name, index) => {
              return <p key={index} className='bg-zinc-100 p-2 px-4 w-max text-[0.9rem] rounded-md'>{name}</p>
            })
          }
        </div> 
        : ""
        }
      </div>
  )
}

export default QuizOption

//     div: "bg-zinc-100 rounded-[0.5rem] p-3 px-4 w-full md:w-full hover:bg-zinc-200 transition-all cursor-pointer",
