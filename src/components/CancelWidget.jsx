import React from 'react'

function CancelWidget() {
  return (
    <div className='absolute bg-zinc-700 bg-opacity-5 backdrop-blur-[1px] left-0 top-0 flex w-full justify-center h-screen items-center'>
      <div className=' h-max p-4 text-center'>
        <div className='bg-zinc-100 p-5 rounded-lg border-[0.7px] border-zinc-300'>
          <h2 className='text-2xl font-bold'>Quer mesmo desistir?</h2>
          <p className='text-[0.9rem] text-zinc-600'>Faltam 02 questões para finalizar...</p>
        </div>

        <div className='w-full flex gap-3 justify-between mt-3 rounded-lg bg-zinc-100 p-2 border-[0.7px] border-zinc-300'>
          <button className='p-2 px-5 bg-zinc-200 w-full rounded-md'>Desistir</button>
          <button className='p-2 px-5 bg-zinc-200 w-full rounded-md'>Continuar</button>
        </div>
      </div>
    </div>
  )
}

export default CancelWidget