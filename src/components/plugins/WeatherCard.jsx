import React from 'react';

const WeatherCard = ({ data }) => {
  if (data.error) {
    return <div className="text-red-500">{data.error}</div>;
  }

  return (
    <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
      <h3 className="font-bold text-lg text-blue-800">Weather in {data.city}</h3>
      <p>Temperature: {data.temp}°C</p>
      <p>Condition: {data.description}</p>
      <p>Humidity: {data.humidity}%</p>
    </div>
  );
};

export default WeatherCard;