import { getFromCache, setInCache } from './caching/CachingUtility';
import {API_BASE_URL, OPENWEATHERMAP_API_KEY} from './constants/constants';
export async function fetchWeatherData() {
  try {
    // Check if data is in the cache
    const cachedData = getFromCache('weatherData');
    console.log('Cached Data:', cachedData);

    if (cachedData) {
      console.log('Data retrieved from cache');
      return cachedData;
    } else {
      const cities = require('./cities.json');
      const extractedCityCodes = cities.List.map(city => city.CityCode);
      //console.log('City Codes:', extractedCityCodes);
      const apiEndpoint = API_BASE_URL;
      const apiParams = {
        id: extractedCityCodes.join(','),
        units: 'metric',
        appid: OPENWEATHERMAP_API_KEY,
      };
      const apiUrl = `${apiEndpoint}?${new URLSearchParams(apiParams)}`;
      //console.log('API URL:', apiUrl); 

      const weatherResponse = await fetch(apiUrl);
      if (weatherResponse.ok) {
        const weatherData = await weatherResponse.json();
        //console.log('Weather Data:', weatherData);

        // const modifiedDataToSend = weatherData.list.map(cityWeather => ({
        //   cityName: cities.List[weatherData.list.indexOf(cityWeather)].CityName,
        //   country: cityWeather.sys.country,
        //   cityCode: cityWeather.id,
        //   timespan: cityWeather.dt,
        //   weatherDescription: cityWeather.weather[0].description,
        //   temperature: cityWeather.main.temp,
        //   icon: cityWeather.weather[0].icon,
        // }));

        // Cache the data for 5 minutes
        setInCache('weatherData', weatherData);
        console.log('Data retrieved from API');

        return weatherData;
      } else {
        console.error('Failed to fetch weather data');
        return null;
      }
    }
  } catch (error) {
    console.error('An error occurred while fetching data', error);
    return null;
  }
}
