import { useState } from "react"

function App() {
  const [Text, setText] = useState("");
  const [Error, setError] = useState("");


  const handleDateChange = (e) => {
    const number = e.target.value
    fetch(`http://numbersapi.com/${number}/year?json`)
      .then(res => res.json())
      .then(data => setText(data.text))
      .catch(err => console.log(err))
  }

  return (
    <div className=' bg-[#343635] h-[100vh] flex flex-col justify-center items-center'>
      <input type="text" className="px-4 py-2" onChange={handleDateChange}/>
      <p className="text-white mt-12">Odpowiedź: {Text}</p>
    </div>
  )
}

export default App
