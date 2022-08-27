import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import "./CountrySelector.css"
function CountrySelector() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  return (
    <Select className="select" options={options} value={value} onChange={changeHandler} placeholder="Location..."></Select>

  )
  
}

export default CountrySelector