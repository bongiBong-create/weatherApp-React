import { useState, useEffect } from "react";
import { date } from "../widgets/date";
import { units, API__KEY } from "../app/api/constants";

import Background from "./Background";
import SimpleSlider from "./SimpleSlider";

import "../app/styles/weather.css";

export default function App() {
  const [currentTime, setCurrentTime] = useState(date().getTime());
  const [weather, setWeather] = useState(null)
  const [location, setLocation] = useState("")
  const [city, setCity] = useState("Saint-Petersburg")


  useEffect(() => {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${units}&key=${API__KEY}`)
      .then(response => response.json())
      .then(json => setWeather(json))
      .catch(error => console.log(error));

  }, [city])

  console.log(weather)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(date().getTime())
    }, 1000)

    return () => clearInterval(interval);

  }, [])

  const handleCity = (e) => {
    setLocation(e.target.value);
  }

  const handleClick = (location) => {
    setCity((city) => location);
    setLocation("");
  }

  return (
    <>
      <Background date={currentTime} />
      {weather ? (<div className="weather">
        <div className="city-info">
          <div className="name">{weather.address}</div>
          <div className="temperature">{Math.floor(weather.currentConditions.temp)}°</div>
          <div className="time">{currentTime}</div>
        </div>
        <SimpleSlider data={weather} />
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
        <div className="city">
          <input
            className="city-input"
            type="text"
            placeholder="set city"
            onChange={handleCity}
            value={location}
          />
          <button className="city-btn" onClick={() => handleClick(location)}>Swap</button>
        </div>
      </div>) : "Loading..."}
    </>
  )
}