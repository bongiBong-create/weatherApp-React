import "../app/styles/weather.css";

import Background from "./Background";

import { useState, useEffect } from "react";
import { date } from "../widgets/date";
import { units, url, API__KEY } from "../app/api/constants";


export default function App() {

  const [currentTime, setCurrentTime] = useState(date().getTime());
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Saint-Petersburg?unitGroup=metric&key=Z9QMSQ5RDB4HB8Y6JHYRAYR25`)
      .then(response => response.json())
      .then(json => setWeather(json))
      .catch(error => console.log(error))
  }, [])
  console.log(weather)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(date().getTime())
    }, 1000)

    return () => clearInterval(interval);

  }, [])

  return (
    <>
      <Background date={currentTime} />
      {weather ? (<div className="weather">
        <div className="city-info">
          <div className="name">{weather.address}</div>
          <div className="temperature">{weather.currentConditions.temp}°</div>
          <div className="time">{currentTime}</div>
        </div>
        <div className="temperature-time">
          {weather.days[0].hours.map((a, i) => {
            return <div className="temperature-item">
              <div className="time">{a.datetime.slice(0, 5)}</div>
              <div className="temperature-item-temp">{a.temp} ° </div>
            </div>
          })}
        </div>
        <div className="forecast">
          <div className="forecast-week">
            Прогноз на неделю
          </div>
          <div className="forecast-day">
            <div className="day-name">Вс</div>
            <div className="logo-weather"></div>
            <div className="day-temp">1°</div>
          </div>
        </div>
      </div>) : "Loading..."}
    </>
  )
}
