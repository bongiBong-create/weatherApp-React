import React from 'react'

import rain from "../app/imgs/rain.png";
import { date } from '../widgets/date';


export default React.memo(function Forecast({ data }) {

  console.log("forecast")
  return (
    <div className="forecast">
      <div className="forecast-week">
        Прогноз на неделю
      </div>
      <div className='forecast-container'>
        {data.days.slice(1, 8).map((a, i) => {
          const dayName = date().getDay(a.datetime);

          return <div className="forecast-day" key={i}>
            <div className="day-name">{dayName}</div>
            <div className="logo-weather">
              <img
                src={rain}
                width={20}
                height={20}
                alt="rain" />
            </div>
            <div className="day-temp">{Math.round(a.temp)} °</div>
          </div>
        })}
      </div>
    </div>
  )
})
