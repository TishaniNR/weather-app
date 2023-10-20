import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMoon, // Icon for '01n'
          faSun, // Icon for '01d'
          faCloudSun, // Icon for '04d'
          faCloudMoon, // Icon for '04n'
          faCloudShowersHeavy, // Icon for '10d'
          
} from '@fortawesome/free-solid-svg-icons';

// Function to map the icon code to a corresponding weather icon
function mapWeatherIcon(iconCode) {
  switch (iconCode) {
    case '01n':
      return <FontAwesomeIcon icon={faMoon} className="fa-3x p-4" />;
    case '01d':
      return <FontAwesomeIcon icon={faSun} className="fa-3x p-4" />;
    case '04n':
      return <FontAwesomeIcon icon={faCloudSun} className="fa-3x p-4" />;
    case '04d':
      return <FontAwesomeIcon icon={faCloudMoon} className="fa-3x p-4" />;
    case '10d':
      return <FontAwesomeIcon icon={faCloudShowersHeavy} className="fa-3x p-4" />;
      
    default:
      return null;
  }
}

// Function to generate a random background color
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

  // Convert the timespan to a readable date format
  const timespan = new Date((cityWeatherData.timespan + 0) * 1000).toLocaleString();
  // Generate a random background color
  const randomBackgroundColor = getRandomColor();
  // Map the weather icon
  const icon = mapWeatherIcon(cityWeatherData.icon); 

  return (
    <div>
      <Link to={`/city/${cityWeatherData.cityName}`} state={{ cityWeatherData: cityWeatherData }}>
        <div className="rounded shadow-lg justify-center items-center text-white text-center mx-8" style={{ backgroundColor: randomBackgroundColor }}>
          <div className="text-center grid grid-cols-2 mx-4">
            <div className="col-span-1">
              <h2 className="text-2xl font-semibold text-white p-4">
                {cityWeatherData.cityName}, {cityWeatherData.country}
              </h2>
              <p className="text-lg text-white">{timespan}</p>
            </div>
              <p className="p-4 text-6xl text-white">{cityWeatherData.temperature} °C</p>
              <div>
                <div className="font-bold text-xl mb-2 text-white">{cityWeatherData.weatherDescription}</div>
                <div className="font-bold text-xl mb-2 text-white">{icon}</div>
              </div>
              <div>
                <p className=" text-6lg text-white">Temp Min: 18.42°C</p>
                <p className=" text-6lg text-white">Temp Min: 34.75°C</p>
              </div>
          </div>
        </div>

        <div className="rounded shadow-lg bg-[#2b3139] justify-center items-center text-white text-center mb-4 mx-8">
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
  );
};

export default CityCard;
