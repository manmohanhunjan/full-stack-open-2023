import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowCountries from "./components/ShowCountries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => setCountries(response.data))
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filterCountries = search === '' ? [] : countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <div>
        find countries
        <input value={search}
          onChange={handleSearch} />
      </div>
      <div>
        {/* <Display filterCountries={filterCountries} /> */}
        {/* {filterCountries.map((country) => <li key={country.name.common}>{country.name.common}</li>)} */}
        <ShowCountries filterCountries={filterCountries} />
      </div>
    </div>
  )

}

export default App;