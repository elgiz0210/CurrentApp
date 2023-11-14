import React, { useState } from "react";
import './WeatherApp.css'

const WeatherPage = () => {

  const API_KEY = '317147e078c54d6c882102156230710';
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isError, setErrorText]  = useState("");


  const getWeather = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
      const data = await response.json();

      if (response.status === 200) {
        setWeather(data)
        setIsLoading(false)
        setIsActive(true)
        setErrorText("")
        setWeather(data)

      } else if(response.status === 400 ) {
        setErrorText('В запросе синтаксическая ошибка')
      } else {
        setErrorText('Произошла неизвестная ошибка')
      }
    } catch (e) {

      setErrorText('Сервер недоступен!')
    } }
  return (
    <div className="weatherPage">
        <div className="container">
        <a href="/"><input type="button" value='на главную страницу'/></a>
          <input className="text" type="text" placeholder='Введите город' onChange={(event) => setCity(event.target.value)}/>
          <input className="btn1" type="button" value='Узнать погоду' onClick={getWeather}/>
          


        </div>
<h1>{isError}</h1>
      {   isActive ?
        <div>
          {isLoading ?
            <div>Loading....</div>
            :
  
            
<div className="weather">      
            <div> 
              <h4 className="w1">From : {weather.location.country}</h4> 
            </div> 

            <div> 
             <h4 className="w2">Temp : {weather.current.temp_c}°C</h4>  
            </div> 

            <div> 
             <h4 className="w3">Speed Wind: {weather.current.wind_mph}MPH</h4> 
            </div>

            <div>
              <h4 className="w4">Pressure: {weather.current.pressure_in}</h4>
            </div>
</div>
          }
        </div>
        :
        null
      }

    </div>
  )
}

export default WeatherPage;