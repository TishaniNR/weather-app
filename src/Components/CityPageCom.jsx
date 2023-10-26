import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import background from "../Images/Background.png";
import moment from 'moment';

const CityPageCom = () => {
  const location = useLocation();
  const { cityWeatherData } = location.state || {};
  //console.log("City Weather Data in the city com page:", cityWeatherData);
  
    // Convert the timespan to a readable date format
    const formattedTimespan = moment.utc().add(cityWeatherData.sys.timezone, "seconds").format("hh:mm a, MMM DD");
  
    const sunrise = new Date(cityWeatherData.sys.sunrise * 1000);
    const sunriseTime = sunrise.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
    const sunset = new Date(cityWeatherData.sys.sunset * 1000);
    const sunsetTime = sunset.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  

  return (
    <div className="h-screen flex flex-col">
    <div className="h-full w-full flex justify-center items-center" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className=" flex flex-grow-0  items-center justify-center">
          <div className="w-1/2  rounded shadow-lg bg-[#5395e1] p-4 absolute  top-48">
            <a href="/" className="absolute top-2 left-2">
              <div className="text-lg text-white cursor-pointer p-1 rounded-full">
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
            </a>
            <div className="text-center m-8">
              <h2 className="text-2xl font-semibold text-white">
                {cityWeatherData.name}, {cityWeatherData.sys.country}
              </h2>
              <h2 className="text-lg text-white">{formattedTimespan}</h2>
              <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-4 ">
                <div className="font-bold text-xl text-white mb-2">
                  {cityWeatherData.weather[0].description}
                </div>
                <div>
                  <div className="text-2xl font-bold text-white ">
                    {cityWeatherData.main.temp} °C
                  </div>
                  <div className="text-sm">
                    <p className=" text-6lg text-white">Temp Min: {cityWeatherData.main.temp_min}°C</p>
                    <p className=" text-6lg text-white">Temp Max: {cityWeatherData.main.temp_max}°C</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded shadow-lg bg-[#2b3139] justify-center items-center text-white text-center">
              <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-4">
                <div className="m-8 text-center">
                  <div className="text-lg font-semibold text-white">
                    Pressure: {cityWeatherData.main.pressure}hPa
                  </div>
                  <div className="text-lg font-semibold text-white">
                    Humidity: {cityWeatherData.main.humidity}%
                  </div>
                  <div className="text-lg font-semibold text-white">
                    Visibility: {cityWeatherData.visibility}km
                  </div>
                </div>
                <div className="m-8 text-center">
                  <div className="text-lg font-semibold text-white">
                  {cityWeatherData.wind.speed} m/s  {cityWeatherData.wind.deg} Degree
                  </div>
                </div>
                <div className="m-8 text-center">
                  <div className="text-lg font-semibold text-white">{sunriseTime}</div>
                  <div className="text-lg font-semibold text-white">{sunsetTime}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default CityPageCom;
