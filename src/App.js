import './App.css';
import LocationInputs from './LocationInputs';

const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast?latitude=51.26&longitude=-1.09&hourly=temperature_2m";

function App() {

  function getWeatherData() {
    fetch(WEATHER_API_URL)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <>
      <h1>React Weather Application</h1>
      <LocationInputs submitFunction={getWeatherData} />
    </>
  );
}

export default App;
