import React, { useEffect, useState } from "react";

const WeatherWidget = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
const res = await fetch(`/api/weather/${city}`);
        if (!res.ok) throw new Error("Failed to fetch weather");
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, [city]);

  if (error) return <p className="text-red-600"> {error}</p>;
  if (!weather) return <p>Loading weather...</p>;

  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-center">
      <h3 className="text-lg font-semibold mb-2">Weather in {weather.city}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.condition}
        className="mx-auto"
      />
      <p className="text-xl font-bold">{weather.temperature}°C</p>
      <p className="text-gray-600 capitalize">{weather.condition}</p>
      <p className="text-gray-500">Humidity: {weather.humidity}%</p>
    </div>
  );
};

export default WeatherWidget;
