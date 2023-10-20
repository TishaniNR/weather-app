import React from 'react'
import { Link } from "react-router-dom";

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const CityCard = ({ cityWeatherData }) => {
  //console.log('City Weather Data:', cityWeatherData);
  const timespan = new Date((cityWeatherData.timespan + 0) * 1000).toLocaleString();
  const randomBackgroundColor = getRandomColor();
 
  return (
    <div>
      <Link to={`/city/${cityWeatherData.cityName}`} state={{ cityWeatherData: cityWeatherData }}>
      <div className="rounded shadow-lg justify-center items-center text-white text-center" style={{ backgroundColor: randomBackgroundColor }}>   
            <div className="text-center grid grid-cols-2 ">
            <div className="col-span-1">
            <h2 className="text-2xl font-semibold text-white p-4"> {cityWeatherData.cityName},{cityWeatherData.country}</h2>
            <p className="text-lg text-white">{timespan}</p>
            </div>
            <p className="p-4 text-6xl text-white">{cityWeatherData.temperature} °C</p>
            
            <div className="font-bold text-xl mb-2 text-white"> {cityWeatherData.weatherDescription}</div>
        </div>
        </div>

        <div className=" rounded shadow-lg bg-[#2b3139] justify-center items-center text-white text-center mb-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="m-8 text-center">
            <div className="text-lg font-semibold text-white">Pressure: 1018hPa</div>
            <div className="text-lg font-semibold text-white">Humidity: 78%</div>
            <div className="text-lg font-semibold text-white">Visibility: 8.0km</div>
          </div>

          <div className="m-8 text-center">
            <div className="text-lg font-semibold text-white">4.0m/s Degree</div>

          </div>

          <div className="m-8 text-center">
            <div className="text-lg font-semibold text-white">Sunrise:</div>
            <div className="text-lg font-semibold text-white">Sunset:</div>
          </div>

        </div>
      </div>
      </Link>            
    </div>
  )
}

export default CityCard