import { useState, useEffect, useCallback } from 'react'
import countrydata from './services/countrydataservice'
import SearchFilter from './components/SearchFilter'
import CountryList from './components/CountryList'
import ShowCountry from './components/ShowCountry'
/*
import Country from './components/CountryComponent'
import Weather from './components/WeatherComponent'
import Notification from './components/NotificationComponent'
*/

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchFilter, setSearchFilter] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showCountry, setShowCountry] = useState(null)
  /*
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [notification, setNotification] = useState({ message: '', type: '' })
  */

  useEffect(() => {
    countrydata.getAll().then(initialCountries => {
      setCountries(initialCountries)
      setSearchResults(initialCountries)
    })
  }, [])

  return (
    <div>
      <h1>Country Data</h1>
      <SearchFilter
        countries={countries}
        searchFilter={searchFilter} 
        setSearchFilter={setSearchFilter}
        setSearchResults={setSearchResults}
      />
      <CountryList
        searchResults={searchResults}
        setSelectedCountry={setShowCountry}
      />
      {showCountry && <ShowCountry country={showCountry} />}
    </div>
  )
}

export default App
