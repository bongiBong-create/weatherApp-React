import React, { useEffect, useState, useMemo } from "react";
import { date } from "../widgets/date";

import night from "../app/video/night.mp4";
import day from "../app/video/waterFall.mp4";

import "../app/styles/background.css";

export default React.memo(function Background() {
  const [time, setTime] = useState(date().getHour());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(date().getHour())
      setBack(time >= 0 && time <= 6 ? night : day)
    }, 3600000)

    return () => clearInterval(interval);
  }, [])

  console.log("back")

  return (
    <video autoPlay muted loop playsInline className="background" key={night}>
      <source src={night} type="video/mp4" />
    </video>
  )
})