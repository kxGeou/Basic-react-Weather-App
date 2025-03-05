import { Sun, Thermometer, WindArrowDown } from "lucide-react";
import { useEffect, useState } from "react"
import './App.css'
function App() {
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState("Warszawa")
  const [inputCity, setInputCity] = useState("Warszawa")


  const typeHandler = (e) => {
    setInputCity(e.target.value)
  }

  const changeHandler = (e) => {
    e.preventDefault();
    setCity(inputCity)
    console.log(city)
  }

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=630029e5e74e193a25de43962b7ada37&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      setWeatherData({
          weather: data.weather[0].main,
          temperature: data.main.temp,
          wind: data.wind.speed,
          cityName: data.name,
        });
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    search(city);
  }, [city]);

  return (
    <div className=' bg-[#1c1a28] h-[100vh] flex flex-col justify-center items-center'>
      
      <div className="flex flex-col  bg-[#393550] rounded w-[95%] min-h-[90vh] px-12">
        <form action="submit" className="flex space-x-8 mb-12 items-center  w-full border-b border-b-white/25 py-6" onSubmit={changeHandler}>
          <input type="text" className="bg-[#2a273a] px-4 py-3 w-full rounded text-white" onChange={typeHandler} value={inputCity}/>
          <button type="submit" className="bg-[#7c75a7] w-[15%] px-4 py-3 rounded text-gray-300 hover:text-white">Search</button>
        </form>

        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col justify-center items-start p-4 bg-[#534d75] rounded-xl w-[25%]">
            {weatherData ? (
                <>
                  <h2 className="text-[#e0dfe8] text-5xl mb-4">{weatherData.cityName}</h2>
                  <p className="text-[#e0dfe8]/75 text-2xl mb-4">Weather: {weatherData.weather}</p>
                  <div className="flex gap-2 items-center">
                  <Thermometer color="#e0dfe8"/>
                  <Thermometer color="#e0dfe8"/>
                  <p className="text-[#e0dfe8]/75 text-2xl"> {weatherData.temperature} °C</p>
                  </div>
                  <div className="flex gap-2 items-center">
                  <WindArrowDown color="#e0dfe8"/>
                  <p className="text-[#e0dfe8]/75 text-2xl"> {weatherData.wind} km/h</p>
                  </div>
                </>
              ) : (
                <div>Loading...</div>
              )}
          </div>
            
        </div>
      </div>

      
    </div>
  )
}

export default App
