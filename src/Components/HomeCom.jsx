import React from 'react';
import background from '../Images/Background.png';
import CityCard from './CityCard';

const HomeCom = ({cityWeatherData }) => {
  
  console.log('City Weather Data:', cityWeatherData);
 
  return (
    <div className="h-full w-full flex justify-center items-center" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className=" grid lg:grid-cols-2 sm:grid-cols-1 gap-4 justify-center items-center xs:mx-8 my-auto">
      {cityWeatherData.map((cityWeather, index) => (
          <CityCard key={index} cityWeatherData={cityWeather} />
        ))}
      </div>

    </div>
  );
};

export default HomeCom;