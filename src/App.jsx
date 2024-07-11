import { useEffect, useState } from 'react'
import './App.css'
import api from './api'

function App() {
  const[search, setSearch] = useState("Kathmandu");
  const[weather, setWeather] = useState({});

  const weatherAPI = api;

  const searched = async() =>{
    const response = await fetch(`${weatherAPI.base}weather?q=${search}&units=metric&APPID=${weatherAPI.key}`);
    const data = await response.json();
    setWeather(data);
    console.log(data)
  }

  useEffect(() => {
    searched();
  },[])
  

  return (
    <>
      <h1>Weather App</h1>
      <div>
        {/* Input Box */}
        <input type="text" placeholder='Enter city' value={search} onChange={(e) => setSearch(e.target.value)}/>
        {/* button */}
        <button onClick={searched}>Search</button>
      </div>
      {/* Location */}
      <p>{weather.name}</p>
     
      <p>{weather.main.temp} °C</p>
      
      <p>{weather.weather[0].main}</p>
      <p>{weather.weather[0].description}</p>
    </>
  )
}

export default App
