import React from 'react'
import ShowWeather from './ShowWeather'

const CountryData = ({ filterCountries }) => {
    return (
        <div>
            <h1>
                {filterCountries[0].name.common}
            </h1>
            <div>
                capital {filterCountries[0].capital[0]}
            </div>
            <div>
                area {filterCountries[0].area}
            </div>
            <h2>
                languages:
            </h2>
            <div>
                <ul>
                    {Object.values(filterCountries[0].languages).map((language) => <li key={language}>{language}</li>)}
                </ul>
            </div>
            <div>
                <img src={filterCountries[0].flags.png} width={200} />
            </div>
            <ShowWeather city={filterCountries[0].capital[0]} />
        </div>
    )
}

export default CountryData