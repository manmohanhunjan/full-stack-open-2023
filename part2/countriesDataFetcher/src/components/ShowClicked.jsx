import React, { useState } from 'react'
import CountryData from './CountryData'

const ShowClicked = ({ country }) => {

    const [show, setShow] = useState(false)

    const handleClick = () => setShow(!show)

    if (show === false) {
        return (
            <button onClick={handleClick}>Show</button>
        )
    } else {
        return (
            <div>
                <button onClick={handleClick}> Hide </button>
                <CountryData filterCountries={[country]} />
            </div>
        )
    }

}

export default ShowClicked