import { useState } from 'react'
import Header from '../../components/Header'
import Main from '../../components/Main'
import TextInput from '../../components/TextInput'
import { countries } from '../../data/countries'

export default function Home() {
  const [countryFilter, setCountryFilter] = useState('')
  
  function handleChange(newCountry) {
    setCountryFilter(newCountry)
  }
  return (
    <>
      <Header classes="bg-blue-300">React Countries</Header>
      <Main>
        <TextInput 
          labelDescription="País" 
          inputValue={countryFilter}
          onInputChange={handleChange}
          autoFocus
        />
      </Main>
    </>
  )
}
