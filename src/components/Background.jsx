import { useEffect, useState } from "react";
import "../app/styles/background.css";
import night from "../app/video/night.mp4";
import day from "../app/video/waterFall.mp4";
import { date } from "../widgets/date";

export default function Background() {
  const [time, setTime] = useState(date().getHour());
  const [back, setBack] = useState(time >= 0 && time <= 6? night : day)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(date().getHour())
      setBack(time >= 0 && time <= 6? night : day)
    }, 1000)

    return () => clearInterval(interval);
  }, [])

  return (
    <video autoPlay muted loop className="background" key={back}>
      <source src={back} type="video/mp4" />
    </video>
  )
}