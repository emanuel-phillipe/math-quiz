import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from "../../context/quiz";

export function CreateQuestionPage({saveQuestion}) {
  const placeholder =
    "Aliquam gravida dui tincidunt ligula hendrerit, sed luctus ipsum egestas. Etiam et dui lacus. Sed in varius nisl, at tincidunt neque. Ut risus massa, efficitur ut diam sit amet, hendrerit vulputate est. Sed sodales justo in lorem posuere pharetra. Aliquam pellentesque egestas nunc a tincidunt. Aenean rutrum quis tellus ac auctor. Donec tempus varius lorem eget aliquet. Aliquam malesuada tempus semper.";

  const [quizState, dispatch] = useContext(QuizContext);
  const [questionInfo, setQuestionInfo] = useState({
    question: "",
    options: [],
    answer: "",
    descriptions: [],
    latex: false,
  });
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentOption, setCurrentOption] = useState("");
  const [ableToSave, setAbleToSave] = useState(false)

  useEffect(() => {
    var able = false

    if(questionInfo.question != "" && questionInfo.options != [] && questionInfo.answer != ""){
      able = true
    }
    
    setAbleToSave(able)
  })

  const descInput = React.useRef(null);
  const optionInput = React.useRef(null);

  const optionsLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const onKeyPressed = (event) => {
    if (event.key === "Enter") {
      if (document.activeElement === descInput.current) {
        if (currentDescription) {
          setQuestionInfo((current) => {
            return {
              ...current,
              descriptions: [...current.descriptions, currentDescription],
            };
          });

          setCurrentDescription("");
        }
      }
    }
  };

  const onEnterPressedOnOptionInput = (event) => {
    if (event.key === "Enter") {
      if (document.activeElement === optionInput.current) {
        if (currentOption) {
          setQuestionInfo((current) => {
            return {
              ...current,
              options: [...current.options, currentOption],
            };
          });

          setCurrentOption("");
        }
      }
    }
  };

  const latexOptionButtonTrue = questionInfo.latex ? "p-2 px-4 text-zinc-50 bg-zinc-800 font-semibold transition-all rounded-lg": "p-2 px-4 text-zinc-700 border-zinc-700 font-semibold border-[0.7px] hover:border-zinc-700 transition-all rounded-lg"
  const latexOptionButtonFalse = !questionInfo.latex ? "p-2 px-4 text-zinc-50 bg-zinc-800 font-semibold transition-all rounded-lg": "p-2 px-4 text-zinc-700 border-zinc-700 font-semibold border-[0.7px] hover:border-zinc-700 transition-all rounded-lg"

  const saveOption = ableToSave ? "border-zinc-400 hover:border-zinc-600 transition-all cursor-pointer text-zinc-400 hover:text-zinc-600 border-[0.7px] p-2 px-4 rounded-lg w-max" : "border-zinc-400 transition-all cursor-not-allowed text-zinc-400 border-[0.7px] p-2 px-4 rounded-lg w-max"

  const correctOptionSelection = (option) => {
    if(option === questionInfo.answer){
      setQuestionInfo((current) => {return {...current, answer: ""}})
      return
    }
    setQuestionInfo((current) => {return {...current, answer: option}})
  }

  const [optionBeingEdited, setOptionBeingEdited] = useState("")

  const editOption = (e, index) => {
    e.preventDefault()

    if(e.key === "Enter"){
      var infos = questionInfo
      infos.options[index] = e.target.value

      setQuestionInfo(infos)
    }
  }

  const selectEditingOption = (e, option) => {
    e.preventDefault()
    setOptionBeingEdited(option)
  }

  const changeOptionBeingEdit = (e, index) => {
    var infos = questionInfo
    infos.options[index] = e.target.value

    setQuestionInfo(infos)
  }

  return (
    <div className="py-5">
      <div className="mb-3 flex justify-between gap-3">
        <div className="flex gap-3">
          {questionInfo.descriptions != []
            ? questionInfo.descriptions.map((description, index) => {
                return (
                  <div
                    key={index}
                    className="bg-zinc-100 p-2 px-4 rounded-lg w-max"
                  >
                    <p className="font-normal text-zinc-700">{description}</p>
                  </div>
                );
              })
            : ""}

          <div className="border-[0.7px] border-zinc-400 p-2 px-4 rounded-lg w-max">
            <input
              ref={descInput}
              onKeyDown={onKeyPressed}
              onChange={(e) => setCurrentDescription(e.target.value)}
              value={currentDescription}
              type="text"
              className="font-normal text-zinc-700 bg-transparent outline-none"
              placeholder="Descrição..."
            />
          </div>
        </div>

        <div>
          <div className={saveOption} onClick={() => {saveQuestion(questionInfo)}}>
            <p className="">Salvar</p>
          </div>
        </div>
      </div>
      <textarea
        onChange={(e) =>
          setQuestionInfo((current) => {
            return { ...current, question: e.target.value };
          })
        }
        value={questionInfo.question}
        className="w-full text-justify outline-none"
        rows={3}
        placeholder={placeholder}
      ></textarea>

      <div>
        {questionInfo.options != []
          ? questionInfo.options.map((option, index) => {

              var divStyle = questionInfo.answer === option ? "p-3 cursor-pointer flex items-center border-[1.7px] w-full my-5 rounded-[0.5rem] transition-all text-zinc-500 hover:text-zinc-800 border-green-400 bg-green-200" : "p-3 cursor-pointer flex items-center border-[1.7px] w-full my-5 rounded-[0.5rem] transition-all text-zinc-500 hover:text-zinc-800"

              return (
                <div onClick={() => correctOptionSelection(option)} key={index} className={divStyle}>
                  
                  <div className={'flex items-center justify-center px-3 h-10 rounded-[0.4rem]'}>
                    <p className='font-semibold text-[1.1rem] '>{optionsLetters[index]}</p>
                  </div>
                  
                  <div className={"flex items-center justify-center px-3 h-10 rounded-[0.4rem]"}>
                    <span onKeyDown={(e) => editOption(e, index)} onChange={(e) => changeOptionBeingEdit(e, index)} contentEditable={optionBeingEdited === option} onClick={(e) => selectEditingOption(option)} className="font-normal text-[1.1rem] ">{option}</span>
                  </div>
                  
                </div>
              );
            }) : ""}

        <div className="p-3 cursor-pointer flex items-center border-zinc-200 border-[1.7px] w-full my-5 rounded-[0.5rem] text-zinc-500 hover:text-zinc-800 transition-all">
          <div className={"flex items-center justify-center px-3 h-10 rounded-[0.4rem]"}>
            <p className="font-semibold text-[1.1rem] ">
              {optionsLetters[questionInfo.options.length]}
            </p>
          </div>
          <div className="">
            <input type="text" value={currentOption} onChange={(e) => {setCurrentOption(e.target.value);}} placeholder="Opção da questão" onKeyDown={onEnterPressedOnOptionInput} ref={optionInput} className="outline-none w-full" />
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col">
        <h2 className="font-semibold text-xl">LateX para Números</h2>
        <p className="text-zinc-500">Para a impressão correta de números, uma extensão na questão é necessária. Por isso, há números na sua questão?</p>
      
        <div className="flex mt-3 gap-3">
            <button onClick={() => {setQuestionInfo((current) => {return {...current, latex: true}})}} className={latexOptionButtonTrue}>Sim</button>
            <button onClick={() => {setQuestionInfo((current) => {return {...current, latex: false}})}} className={latexOptionButtonFalse}>Não</button>
        </div>
      
      </div>

    </div>
  );
}