import React from 'react'
import CardTopImage from '../Images/CardTopImage.png';

const CityCard = ({ cityWeatherData }) => {
  console.log('City Weather Data:', cityWeatherData);
  const timespan = new Date(cityWeatherData[0].timespan * 1000).toLocaleString();
 
  return (
    <div>
      <a href="/city">
      <button>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4  bg-[#363b42] ">
        <img src={CardTopImage} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">Status: {cityWeatherData.weatherDescription}</div>
            <div className="text-center ">
            <h2 className="text-2xl font-semibold text-white"> {cityWeatherData.cityName},{cityWeatherData.country}</h2>
            <p className="text-lg text-white">{timespan}</p>
            <p className="text-lg text-white">Tempurature: {cityWeatherData.temperature} °C</p> 
          </div>
        </div>
      </div>
      </button>
      </a>


      <a href="/city">
      <button>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4  bg-[#363b42] ">
        <img src={CardTopImage} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">Status: {cityWeatherData[0].weatherDescription}</div>
            <div className="text-center ">
            <h2 className="text-2xl font-semibold text-white"> {cityWeatherData[0].cityName},{cityWeatherData[0].country}</h2>
            <p className="text-lg text-white">{timespan}</p>
            <p className="text-lg text-white">Tempurature: {cityWeatherData[0].temperature} °C</p> 
          </div>
        </div>
      </div>
      </button>
      </a>
                  
    </div>
  )
}

export default CityCard