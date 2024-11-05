import React, { useCallback, useState } from "react"

export default function City({ setCity }) {
  const [location, setLocation] = useState("")

  const handleCity = (e) => {
    setLocation(e.target.value);
  }

  const handleClick = (location) => {
    setCity((city) => location);
    setLocation("")
  }

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleClick(location)
    }
  }

  return (
    <div className="city">
      <input
        className="city-input"
        type="text"
        placeholder="Set city"
        value={location}
        onChange={handleCity}
        onKeyDown={handleEnter}
      />
      <button className="city-btn" onClick={() => handleClick(location)}>Swap</button>
    </div>
  )
}

