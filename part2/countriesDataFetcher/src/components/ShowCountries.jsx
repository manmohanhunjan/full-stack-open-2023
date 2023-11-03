import React, { useState } from 'react'
import CountryData from './CountryData'
import ShowClicked from './ShowClicked'

const ShowCountries = ({ filterCountries }) => {

    if (filterCountries.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    } else if (filterCountries.length === 1) {
        return (
            <CountryData filterCountries={filterCountries} />
        )
    } else {
        return (
            <div>
                {filterCountries.map((country) => (
                    <li key={country.name.common}>{country.name.common} <ShowClicked country={country} /></li>))}
            </div>
        )
    }
}

export default ShowCountries