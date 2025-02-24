import React, { useState, useEffect } from "react";
import weatherservice from "../services/weatherservice";

const ShowCountry = ({ country }) => {
    console.log("ShowCountry", country);
    /*
    if (!country || !country.name) {
        return null;
    }
    */
    const { name, capital, area, population, languages, flags } = country;
    const commonName = name.common;

    // State to store weather data
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await weatherservice.getWeather(commonName);
                console.log("Selected Country's Weather Data", response);
                setWeatherData(response.current);
            } catch (error) {
                console.error("Error fetching weather data", error);
            }
        };

        fetchWeather();
    }, [commonName]); // Runs when the country changes

    return (
        <div>
            <h2>{commonName}</h2>
            <p>Capital: {capital}</p>
            <p>Area: {area} km²</p>
            <p>Population: {population}</p>
            <h3>Languages</h3>
            <ul>
                {Object.values(languages).map((language) => (
                    <li key={language}>{language}</li>
                ))}
            </ul>
            <img src={flags.png} alt={name} width="100" />
            <h3>Weather in {capital}</h3>
            {weatherData ? (
                <>
                    <p>Temperature: {weatherData.temperature} Celsius</p>
                    {weatherData.weather_icons && weatherData.weather_icons[0] && (
                        <img src={weatherData.weather_icons[0]} alt="weather icon" />
                    )}
                    <p>Wind: {weatherData.wind_speed} m/s</p>
                </>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
};

export default ShowCountry;
