import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { getCity } from "../actions";
import './SearchBar.css'

const SearchBar = () => {
 
  const dispatch = useDispatch()
  const [ciudad, setCiudad] = useState("");

  const changeHandler = (e) =>{
    setCiudad(e.target.value)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(getCity(ciudad))
      setCiudad("")
    }}>
      <input className="searchBarContainer" type="text" onChange={(e) => changeHandler(e)} value={ciudad} placeholder="Ciudad..."/>
      <input className="searchBoton" type="submit" value="Agregar" />
    </form>
  );
}

export default SearchBar