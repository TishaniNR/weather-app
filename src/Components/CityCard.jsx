import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMoon, // Icon for '01n'
          faSun, // Icon for '01d'
          faCloudSun, // Icon for '04d'
          faCloudMoon, // Icon for '04n'
          faCloudShowersHeavy, // Icon for '10d'
          
} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

// Function to map the icon code to a corresponding weather icon
function mapWeatherIcon(iconCode) {
  switch (iconCode) {
    case '01n':
      return <FontAwesomeIcon icon={faMoon} className="fa-1x p-2" />;
    case '01d':
      return <FontAwesomeIcon icon={faSun} className="fa-1x p-2"/>;
    case '04n':
      return <FontAwesomeIcon icon={faCloudSun} className="fa-1x p-2"/>;
    case '03n':
      return <FontAwesomeIcon icon={faCloudSun} className="fa-1x p-2" />;
    case '04d':
      return <FontAwesomeIcon icon={faCloudMoon} className="fa-1x p-2" />;
    case '10d':
      return <FontAwesomeIcon icon={faCloudShowersHeavy} className="fa-1x p-2" />;
      
    default:
      return <FontAwesomeIcon icon={faSun} className="fa-3x p-2" />;
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
  const formattedTimespan = moment.utc().add(cityWeatherData.sys.timezone, "seconds").format("hh:mm a, MMM DD");


  const sunrise = new Date(cityWeatherData.sys.sunrise * 1000);
  const sunriseTime = sunrise.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const sunset = new Date(cityWeatherData.sys.sunset * 1000);
  const sunsetTime = sunset.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Generate a random background color
  const randomBackgroundColor = getRandomColor();
  // Map the weather icon
  const icon = mapWeatherIcon(cityWeatherData.icon);

  return (
    <div>
      <Link to={`/city/${cityWeatherData.cityName}`} state={{ cityWeatherData: cityWeatherData }}>
        <div className="rounded shadow-lg justify-center items-center  text-white text-center mx-8 p-2 max-w-lg md:h-56" style={{ backgroundColor: randomBackgroundColor, }}>
          <div className="text-center grid md:grid-cols-2 sm:grid-cols-1 mx-4">
            <div className="col-span-1">
              <h2 className="text-2xl font-semibold text-white p-4">
                {cityWeatherData.name}, {cityWeatherData.sys.country}
              </h2>
              <p className="text-lg text-white">{formattedTimespan}</p>
            </div>
              <p className="p-4 text-4xl text-white">{cityWeatherData.main.temp} °C</p>
              <div>
                <div className="font-bold text-xl mb-2 text-white">{cityWeatherData.weather[0].description}</div>
                <div className="font-bold text-xl mb-2 text-white">{icon}</div>
              </div>
              <div>
                <p className=" text-6lg text-white">Temp Min: {cityWeatherData.main.temp_min}°C</p>
                <p className=" text-6lg text-white">Temp Max: {cityWeatherData.main.temp_max}°C</p>
              </div>
          </div>
        </div>

        <div className="rounded shadow-lg bg-[#2b3139] justify-center items-center text-white text-center mb-4 mx-8 p-2 max-w-lg md:h-36 sm:h-96">
          <div className="grid md:grid-cols-3 sm:grid-cols-1">
            <div className="m-2 text-center">
              <div className="text-lg font-semibold text-white">Pressure: {cityWeatherData.main.pressure}hPa</div>
              <div className="text-lg font-semibold text-white">Humidity: {cityWeatherData.main.humidity}%</div>
              <div className="text-lg font-semibold text-white">Visibility: {cityWeatherData.visibility}km</div>
            </div>

            <div className="m-2 text-center">
              <div className="text-lg font-semibold text-white">{cityWeatherData.wind.speed} m/s  {cityWeatherData.wind.deg} Degree</div>
            </div>

            <div className="m-2 text-center">
              <div className="text-lg font-semibold text-white">{sunriseTime}</div>
              <div className="text-lg font-semibold text-white">{sunsetTime}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CityCard;
