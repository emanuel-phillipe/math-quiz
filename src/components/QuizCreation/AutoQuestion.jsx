import { FunctionDeclarationSchemaType, GoogleGenerativeAI } from '@google/generative-ai';
import React, { useState } from 'react'



function AutoQuestion() {

  const tool = 
    {
      functionDeclarations: [
        {
          name: "organizeQuestion",
          description: "organize a question components, such as options and answer, in an object",
          parameters: {
            type: FunctionDeclarationSchemaType.OBJECT,
            properties: {
              statement: {type: FunctionDeclarationSchemaType.STRING},
              options: {type: FunctionDeclarationSchemaType.ARRAY},
              answer: {type: FunctionDeclarationSchemaType.STRING}
            },
            required: ["statement", "options", "answer"]
          }
        }
      ]
    }

  

  const [question, setQuestion] = useState("")

  const correctGemini = async () => {

    console.log(question);

    const genAi = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
    const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash-latest", tools: tool }, {apiVersion: "v1beta"});
    var prompt = {
      role: "user",
      parts: [
        {text: question}
      ]
    }

    var result = await model.generateContent({contents: [prompt]});
    var response = await result.response;
    var text = response.text();

    console.log(text);

  };

  return (
    <div>
      <textarea onChange={(e) => {setQuestion(e.target.value)}} value={question}></textarea>
      <button onClick={() => correctGemini()}>Teste</button>
    </div>
  )
}

export default AutoQuestion