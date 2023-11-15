import React from 'react';
import background from '../Images/background.jpg';
import CityCard from './CityCard';
import SearchBar from '../Components/SearchBar';

const HomeCom = ({ cityWeatherData }) => {


  return (
    <div
      className="h-full w-full flex flex-col items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <SearchBar />

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 justify-center items-center xs:mx-8 my-auto">
        {cityWeatherData.map((cityWeather, index) => (
          <CityCard key={index} cityWeatherData={cityWeather} />
        ))}
      </div>
    </div>
  );
};

export default HomeCom;
