import citiesData from "./tr.json"
import {useSelectedCity} from "../Context"
import React from 'react'

import './Header.css';
function Header() {
    const {
        selectedCity,
        setSelectedCity} = useSelectedCity();

    const handleChange=(e)=>{
        var ss = (citiesData.filter((city)=>{
          return city.name===e.target.value
        })[0])
    //console.log("find ", ss.name);
    setSelectedCity(ss);
    }

  return (
    <header className="App-header">
        <div>Header</div>
        
        <select defaultValue={selectedCity.name} onChange={handleChange}>
            <Cities />
        </select>
        
        <div>{selectedCity.name}</div>
    </header>
  )
}

function Cities() {
    return (
        citiesData.map((il) => {
        return <option key={il.id} value={il.name}>{il.name}</option>
        })
    )
}

export default Header