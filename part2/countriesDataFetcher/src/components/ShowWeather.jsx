import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowWeather = ({ city }) => {
    const [weather, setWeather] = useState(
        {
            main: { temp: 0 },
            weather: [{ icon: "" }],
            wind: { speed: 0 }
        });

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`)
            .then(response => {
                setWeather(response.data);
            })
            .catch(error => {
                console.log("Error fetching weather data:", error);
            });
    }, [city]);

    return (
        <div>
            <div>
                <h1>Weather in {city}</h1>
            </div>
            <div>
                temperature: {weather.main.temp} Celsius
            </div>
            <div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            </div>
            <div>
                wind: {weather.wind.speed} m/s
            </div>
        </div>
    );
};

export default ShowWeather;


// .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f767a695fe8842e11f563041114151b6&units=metric`)
