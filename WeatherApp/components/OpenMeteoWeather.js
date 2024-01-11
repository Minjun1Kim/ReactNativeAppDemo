import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchWeatherApi } from 'openmeteo';

const OpenMeteoWeather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const url = 'https://api.open-meteo.com/v1/forecast';
      const params = {
        latitude: 52.52,
        longitude: 13.41,
        hourly: 'temperature_2m',
      };

      try {
        const responses = await fetchWeatherApi(url, params);
        const response = responses[0];

        const utcOffsetSeconds = response.utcOffsetSeconds();
        const hourly = response.hourly();

        const weatherHourlyData = {
          time: range(
            Number(hourly.time()),
            Number(hourly.timeEnd()),
            hourly.interval()
          ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
          temperature2m: hourly.variables(0).valuesArray(),
        };

        setWeatherData(weatherHourlyData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    const range = (start, stop, step) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

    fetchWeatherData();
  }, []);

  if (!weatherData) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      {weatherData.time.map((time, index) => (
        <View key={index}>
          <Text>{time.toISOString()}</Text>
          <Text>Temperature 2m: {weatherData.temperature2m[index]}</Text>
        </View>
      ))}
    </View>
  );
};

export default OpenMeteoWeather;
