import React, { useContext, useState } from "react";
import { QuizContext } from "../context/quiz";

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
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "",
    options: [],
    answer: "",
    descriptions: [],
    latex: false
  })

  return (
    <div className="py-12">

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

    </div>
  );
}