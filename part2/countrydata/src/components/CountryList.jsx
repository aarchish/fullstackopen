import React from "react";
import ShowCountry from "./ShowCountry";

const CountryList = ({ searchResults, setSelectedCountry }) => {
    console.log("CountryList searchResults", searchResults);

    const handleShowCountry = (country) => {
        console.log("handleShowCountry", country);

        setSelectedCountry(country);
    }

    return (
        <div>
            {
                searchResults.length > 10
                ? <p>Too many matches, specify another filter</p>
                : searchResults.map(country => (
                    <div key={country.name.common}>
                        {country.name.common}
                        <button onClick={() => handleShowCountry(country)}>show</button>
                    </div>
                ))
            }
        </div>
    )
}

export default CountryList;