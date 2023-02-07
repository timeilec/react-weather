import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

function TempChart (props) {
  const weatherData = props.weatherData;
  console.log(props);
  const visible = props.visible;
  let tempData, timeData;
  let chartData = [];
  
  if (weatherData !== undefined) {
    timeData = weatherData["hourly"]["time"];
    tempData = weatherData["hourly"]["temperature_2m"];
    for(let i = 0; i < tempData.length; i++){
      chartData.push({
        Time: timeData[i],
        Temperature: tempData[i]
      });
    }
  }

  if (visible) {
    return (
      <>
        <h2>Temperature History</h2>
        <ResponsiveContainer width="90%" height={400}>
          <LineChart data={chartData}>
            <Line type="monotone" dataKey="Temperature" stroke="#8884d8" strokeWidth={3} dot={false} isAnimationActive={false} />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Time" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  }
  else {
    return (<></>);
  }
}

export default TempChart;