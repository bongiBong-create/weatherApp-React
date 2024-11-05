import { useState, useEffect } from "react";
import { date } from "../widgets/date";
import { units, API__KEY } from "../app/api/constants";

import Background from "./Background";
import SimpleSlider from "./SimpleSlider";
import City from "./City";
import Forecast from "./Forecast";

import "../app/styles/weather.css";

export default function App() {
  const [currentTime, setCurrentTime] = useState(date().getTime());
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState("Saint-Petersburg")

  useEffect(() => {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${units}&key=${API__KEY}`)
      .then(response => response.json())
      .then(json => setWeather(json))
      .catch(error => console.log(error));

  }, [city])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(date().getTime())
    }, 1000)

    return () => clearInterval(interval);

  }, [])


  return (
    <>
      <Background />
      {weather ? (
        <div className="weather">
          <div className="city-info">
            <div className="name">{weather.address}</div>
            <div className="temperature">{Math.round(weather.currentConditions.temp)}°</div>
            <div className="time">{currentTime}</div>
          </div>
          <SimpleSlider data={weather} />
          <Forecast data={weather} />
          <City
            setCity={setCity}
          />
        </div>
      ) : "Loading..."}
    </>
  )
}