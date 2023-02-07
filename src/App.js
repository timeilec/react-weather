import React, { useState, useEffect } from 'react';
import './App.css';
import LocationInputs from './LocationInputs';
import TempChart from './TempChart';

const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast?latitude=51.26&longitude=-1.09&hourly=temperature_2m";

function App() {

  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    getWeatherData();
  }, []);

  function getWeatherData() {
    fetch(WEATHER_API_URL)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
      });
  }

  return (
    <>
      <h1>React Weather Application</h1>
      <LocationInputs submitFunction={getWeatherData} />
      <TempChart weatherData={weatherData} />
    </>
  );
}

export default App;
