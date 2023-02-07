import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function TempChart (props) {
  const weatherData = props.weatherData;
  let tempData, timeData;
  let chartData = [];
  
  if (weatherData !== undefined) {
    timeData = weatherData["hourly"]["time"];
    tempData = weatherData["hourly"]["temperature_2m"];
    for(let i = 0; i < tempData.length; i++){
      chartData.push({
        time: timeData[i],
        temperature: tempData[i]
      });
    }
  }

  return (
    <LineChart width={600} height={300} data={chartData}>
      <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="time" />
      <YAxis />
    </LineChart>
  );
}

export default TempChart;