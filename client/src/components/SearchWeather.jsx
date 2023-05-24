import React, { useState } from "react";
import "./SearchWeather.css";
import axios from "axios";
const SearchWeather = () => {
  const [city, setCity] = useState(null);
  const [weatherData, searchWeatherData] = useState(null);

  const searchWeatherHandler = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "https://weather-backend-jxva.onrender.com/",
      { city }
    );
    searchWeatherData(response.data);
  };

  const handleKeyDown = (event) => {
    // console.log(message);

    if (event.key === "Backspace") {
      searchWeatherData(null);
    }
  };

  return (
    <div className="card">
      <form onSubmit={searchWeatherHandler}>
        <input
          type="text"
          className="search-bar"
          placeholder="enter a city"
          onChange={(e) => {
            setCity(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <button>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
          </svg>
        </button>
      </form>
      {weatherData ? (
        <div className="my-4 ml-2">
          <h1 className="my-2">
            Weather in <span className="font-bold text-3xl">{city}</span>
          </h1>
          <h1 className="font-bold text-2xl my-2">
            Temperature: {weatherData.temp}c
          </h1>
          <h1 className="text-2xl my-2">
            Description: {weatherData.description}
          </h1>
          <h1 className="text-2xl my-2">Humidity:{weatherData.humidity}</h1>
        </div>
      ) : (
        <h1>Enter A Valid City</h1>
      )}
    </div>
  );
};

export default SearchWeather;
