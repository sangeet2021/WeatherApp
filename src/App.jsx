import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api'

function App() {
  const[search, setSearch] = useState("Kathmandu");
  const[weather, setWeather] = useState({});

  const weatherAPI = api;

  const searched = () => {
    fetch(`${weatherAPI.base}weather?q=${search}&units=metric&APPID=${weatherAPI.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
      console.log(result)
    })
  }
  

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
      {/*  Temperature */}
      <p>{weather.main.temp}°C</p>
      {/* Condition */}
      <p></p>
    </>
  )
}

export default App
