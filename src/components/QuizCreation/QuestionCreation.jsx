import React, { useContext, useState } from "react";
import { QuizContext } from "../../context/quiz";
import { Plus, Trash, TrashSimple } from "@phosphor-icons/react";
import { CreateQuestionPage } from "./CreateQuestionPage";

// {
//   question: "Qual é a principal diferença entre os conceitos de fotossíntese e respiração celular?",
//   options: ["A fotossíntese ocorre em todos os organismos vivos, enquanto a respiração celular ocorre apenas em plantas.", "Fotossíntese é o processo pelo qual as plantas produzem alimento a partir de luz solar, água e dióxido de carbono, liberando oxigênio. Respiração celular é a conversão de glicose em energia (ATP) nas células, liberando dióxido de carbono e água.", "Fotossíntese é o processo pelo qual as células produzem alimento a partir de luz solar, água e dióxido de carbono, liberando oxigênio. Respiração celular é a conversão de glicose em energia (ATP) nas plantas, liberando dióxido de carbono e água.", "A fotossíntese ocorre apenas durante o dia, enquanto a respiração celular ocorre apenas à noite."],
//   answer: "Fotossíntese é o processo pelo qual as plantas produzem alimento a partir de luz solar, água e dióxido de carbono, liberando oxigênio. Respiração celular é a conversão de glicose em energia (ATP) nas células, liberando dióxido de carbono e água.",
//   descriptions: ["Biologia"],
//   latex: false
// },

export function QuestionCreation() {

  const [quizState, dispatch] = useContext(QuizContext)
  const [quizValues, setQuizValues] = useState({
    title: "",
    questions: [],
  })

  const [questionsCreation, setQuestionsCreation] = useState(false)

  const truncate = (text, limit) => {
    if (text.length > limit) {
        for (let i = limit; i > 0; i--){
            if(text.charAt(i) === ' ' && (text.charAt(i-1) != ','||text.charAt(i-1) != '.'||text.charAt(i-1) != ';')) {
                return text.substring(0, i) + '...';
            }
        }
      return text.substring(0, limit) + '...';
    } else {
        return text;
    }
  }
  

  const saveQuestion = (question) => {
    setQuizValues((current) => {
      return {
        ...current,
        questions: [...current.questions, question]
      }
    })
    
    setQuestionsCreation(false)
  }

  return (
    <div>
      {
        questionsCreation ? <CreateQuestionPage saveQuestion={saveQuestion}/> : <div className="py-12">

        <div>
          <h1 className="text-4xl font-bold">Criação de Quiz</h1>
          <p className="text-zinc-500">
            Aqui, é possível criar um novo quiz, com quantas perguntas quiser!
          </p>
        </div>
  
        <div className="mt-10">
          <p className="font-semibold mb-1 text-zinc-700">Título</p>
          <input type="text" placeholder="Ex. Química" value={quizValues.title} className="border-[0.7px] p-2 rounded-lg border-zinc-300 transition-all focus:border-zinc-700 outline-none" onChange={(e) => setQuizValues((current) => { return {...current, title: e.target.value}})}/>
        </div>
  
        <div className="mt-10 flex gap-2 flex-col">
          <h2 className="font-semibold text-xl">Questões</h2>
          <div className="flex flex-col gap-3">
            <div onClick={() => {setQuestionsCreation(true)}} className="p-4 cursor-pointer mt-4 border-[0.7px] text-zinc-400 flex justify-center border-zinc-300 rounded-lg hover:border-zinc-500 hover:text-zinc-900 transition-all">
              <Plus size={22} weight="bold"/>
            </div>

            {

              quizValues.questions ? (quizValues.questions.map((current, index) => {
                return (
                  <div key={index} className="flex p-4 border-[0.7px] border-zinc-300 hover:border-zinc-500 transition-all px-4 rounded-lg items-center">
                    <p className="text-[1.1rem] pl-1 font-bold">{index < 10 ? `0${index+1}` : index+1}</p>
                    <div className="flex flex-col pl-3">
                      <p className="font-normal text-zinc-800">{truncate(current.question, 50)}</p>
                      <p className="text-[0.9rem] text-zinc-500">{current.options.length} opções</p>
                    </div>
                    <TrashSimple />
                  </div>
                )
              })) : ""

            }
          </div>
        </div>
  
      </div>
      }
    </div>
  );
}