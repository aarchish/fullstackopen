import React from "react";

const SearchFilter = ({ countries, searchFilter, setSearchFilter, setSearchResults }) => {
    
    const handleSearchChange = (event) => {
        const searchTerm = event.target.value
        setSearchFilter(searchTerm)
        const results = countries.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
        setSearchResults(results)
    }

    return (
        <div>
        find countries <input value={searchFilter} onChange={handleSearchChange} />
        </div>
    );
}

export default SearchFilter;