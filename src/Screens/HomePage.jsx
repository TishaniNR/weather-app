import React, { useState, useEffect } from 'react';
import HomeComponent from '../Components/HomeCom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { fetchWeatherData } from '../APIHelper'; 

const HomePage = () => {
  const [cityCodes, setCityCodes] = useState([]);
  const [dataToSend, setDataToSend] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const weatherData = await fetchWeatherData();
        if (weatherData) {
          const cityCodes = weatherData.list.map(cityWeather => cityWeather.id);
          setCityCodes(cityCodes);
          setDataToSend(weatherData.list);
        }
      } catch (error) {
        console.error('An error occurred while fetching data', error);
      }
    }

    fetchData();
  }, []);

  //console.log('City Codes:', cityCodes); // Log the city codes  
  //console.log('Data to Send:', dataToSend); // Log the data to send

  return (
    <div>
      <Header />
      <HomeComponent cityCodes={cityCodes} cityWeatherData={dataToSend} />
      <Footer />
    </div>
  );
};

export default HomePage;
