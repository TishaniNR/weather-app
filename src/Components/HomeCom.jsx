import React from 'react';
import background from '../Images/Background.png';
import CityCard from './CityCard';

const HomeCom = ({ weatherData, cityWeatherData }) => {
  
  console.log('Additional Data:', cityWeatherData);
 
  return (
    <div className="h-screen flex justify-center items-center" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className=" flex justify-center items-center m-4">
      <CityCard cityWeatherData={cityWeatherData}/>
      </div>
    </div>
  );
};

export default HomeCom;