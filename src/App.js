import React, { useState, useEffect } from 'react';
import './App.css';
import LocationInputs from './LocationInputs';
import TempChart from './TempChart';

function App() {

  const [weatherData, setWeatherData] = useState();
  const [graphVisible, setGraphVisible] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  useEffect(() => {
    const WEATHER_API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;
    if (longitude !== undefined && latitude !== undefined) {
      fetch(WEATHER_API_URL)
        .then(response => response.json())
        .then(data => {
          setWeatherData(data);
        });
      setGraphVisible(true);
    }
  }, [latitude, longitude]);

  function updateCoordinates(event) {
    let latitudeInput = document.getElementById("latitudeInput");
    let longitudeInput = document.getElementById("longitudeInput");
    setLatitude(Number(latitudeInput.value).toFixed(10));
    setLongitude(Number(longitudeInput.value).toFixed(10));
  }

  return (
    <>
      <h1>React Weather Application</h1>
      <LocationInputs submitFunction={updateCoordinates} />
      <TempChart weatherData={weatherData} visible={graphVisible} />
    </>
  );
}

export default App;
