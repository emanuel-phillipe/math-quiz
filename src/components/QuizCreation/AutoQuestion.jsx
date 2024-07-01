import { FunctionDeclarationSchemaType, GoogleGenerativeAI } from '@google/generative-ai';
import React, { useState } from 'react'

import OpenAI from "openai";


function AutoQuestion() {

  const [question, setQuestion] = useState("")

  const correctGPT = async () => {

    const openai = new OpenAI({
      apiKey: import.meta.env.VITE_OPENAI_KEY,
      dangerouslyAllowBrowser: true,
    });
    
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          "role": "system",
          "content": [
            {
              "type": "text",
              "text": "Você deve organizar a questão escrita pelo usuário em um objeto separado em enunciado, opções e a resposta. Você não deve escrever a letra na frente das opções (exemplo: A) ... deve ser escrito apenas a \"...\")"
            }
          ]
        },
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              "text": question
            }
          ]
        }
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      tools: [
        {
          "type": "function",
          "function": {
            "name": "organize_question",
            "description": "organize a question components, such as options and answer, in an object",
            "parameters": {
              "type": "object",
              "properties": {
                "statement": {
                  "type": "string"
                },
                "options": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "answer": {
                  "type": "string"
                }
              },
              "required": [
                "statement",
                "options",
                "answer"
              ]
            }
          }
        }
      ],
    });
    
    var responseJSON = JSON.parse(response.choices[0].message.tool_calls[0].function.arguments);
    console.log(responseJSON);

  };

  return (
    <div className='absolute left-0 p-4 px-12 backdrop-blur-sm w-full h-full'>
      <div className='bg-zinc-100 p-4 rounded-lg'>
        <textarea onChange={(e) => {setQuestion(e.target.value)}} value={question} className='w-full h-[20rem] outline-none' placeholder='A fotossíntese é um processo vital para a produção de energia em plantas. Qual das alternativas a seguir descreve corretamente o papel da clorofila na fotossíntese?

  A) A clorofila é responsável pela absorção de dióxido de carbono do ar.
  B) A clorofila é responsável pela produção de glicose a partir de água e luz solar.
  C) A clorofila absorve luz solar, convertendo-a em energia química durante a fase clara da fotossíntese.
  D) A clorofila é a principal enzima que converte ATP em ADP durante a fotossíntese.
  E) A clorofila libera oxigênio como um subproduto durante a fase escura da fotossíntese.

  '></textarea>
      <button onClick={() => correctGPT()}>Teste</button>
      </div>
    </div>
  )
}

export default AutoQuestion