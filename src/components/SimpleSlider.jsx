import React from 'react'
import Slider from "react-slick";

import "../app/styles/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default React.memo(function SimpleSlider({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  console.log("slider")

  return (
    <div className='temperature-time'>
      <Slider {...settings}>
        {data.days[0].hours.map((a, i) => {
          return <div className="temperature-item" key={i}>
            <div className="time">{a.datetime.slice(0, 5)}</div>
            <div className="temperature-item-temp">{Math.round(a.temp)} ° </div>
          </div>
        })}
      </Slider>
    </div>
  )
})
