import React from 'react'

function QuizOption({title, desc, click, disabled}) {

  const classStyles = {
    div: disabled ? "bg-zinc-50 rounded-[0.5rem] p-4 w-max transition-all cursor-not-allowed" : "bg-zinc-100 rounded-[0.5rem] p-3 px-4 w-max hover:bg-zinc-200 transition-all cursor-pointer",
    title: disabled ? "text-[1.1rem] font-semibold text-zinc-500" : "text-[1.1rem] font-semibold",
    desc: disabled ? "text-[0.9rem] text-zinc-400" : "text-[0.9rem] text-zinc-600"
  }

  return (
      <div onClick={click} className={classStyles.div}>
        <h3 className={classStyles.title}>{title}</h3>
        <p className={classStyles.desc}>{desc}</p>
      </div>
  )
}

export default QuizOption