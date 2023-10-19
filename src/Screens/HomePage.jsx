import React, { useState, useEffect } from 'react';
import HomeComponent from '../Components/HomeCom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const HomePage = () => {
  const [cityCodes, setCityCodes] = useState([]);
  const [dataToSend, setDataToSend] = useState([]);

  //console.log('City Codes:', cityCodes); // Log the city codes 
  useEffect(() => {
    async function fetchCities() {
      try {
        const cities = require('../cities.json');
       // console.log('Cities:', cities); // Log the cities data 

        // Extract 'CityCode' values and update the state
        const extractedCityCodes = cities.List.map(city => city.CityCode);
        setCityCodes(extractedCityCodes);

        // Build the API request URL to fetch weather data for the group of cities
        const apiEndpoint = 'http://api.openweathermap.org/data/2.5/group';
        const apiParams = {
          id: extractedCityCodes.join(','),
          units: 'metric', // Adjust units as needed 
          appid: '53a0b3c59488e3b72d499e23a47c0887', // OpenWeatherMap API key
        };
        const apiUrl = `${apiEndpoint}?${new URLSearchParams(apiParams)}`;
        //console.log('API URL:', apiUrl); 

        // Fetch weather data for the group of cities
        const weatherResponse = await fetch(apiUrl);
        if (weatherResponse.ok) {
          const weatherData = await weatherResponse.json();
          //console.log('Weather Data:', weatherData); 
          

      // Create an array to store the modified dataToSend for each city
      const modifiedDataToSend = weatherData.list.map(cityWeather => ({
        cityName: cities.List[weatherData.list.indexOf(cityWeather)].CityName,
        country: cityWeather.sys.country,
        cityCode: cityWeather.id,
        timespan: cityWeather.dt,
        weatherDescription: cityWeather.weather[0].description,
        temperature: cityWeather.main.temp,
      }));

      // Set the modifiedDataToSend state
      setDataToSend(modifiedDataToSend);
        } else {
          console.error('Failed to fetch weather data');
        }
      } catch (error) {
        console.error('An error occurred while fetching data', error);
      }
    }

    fetchCities();
  }, []);

  return (
    <div>
      <Header />
      <HomeComponent cityCodes={cityCodes} cityWeatherData={dataToSend}  />
      <Footer />
    </div>
  );
};

export default HomePage;
