import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  function addButtonHandle() {
    setCounter(counter + 1)
  }

  function decreaseButtonHandle() {
      setCounter(counter - 1)
  }

  function resetCounter() {
    setCounter(counter - counter)
  }

  return (
    <div className='text-white bg-[#343635] h-[100vh] flex flex-col justify-center items-center'>
      <h2 className='text-2xl opacity-60 mb-5'>Counter</h2>
      <p className='text-4xl'>{counter} </p>
      <div className='flex gap-5 mt-6'>
        <button className='flex justify-center items-center bg-[#8c1827] h-[2rem] w-[4rem] rounded-md' onClick={decreaseButtonHandle}>-</button>
        <button className='flex justify-center items-center bg-[#184c8c] h-[2rem] w-[4rem] rounded-md' onClick={resetCounter}>Reset</button>
        <button className='flex justify-center items-center bg-[#188c1c] h-[2rem] w-[4rem] rounded-md' onClick={addButtonHandle}>+</button>
      </div>
    </div>
  )
}

export default App
