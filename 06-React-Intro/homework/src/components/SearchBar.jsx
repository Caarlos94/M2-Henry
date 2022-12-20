import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type="text" name="search" id="search" placeholder='Agrega Ciudad'/>
      <button onClick={() => {props.onSearch(document.getElementById("search").value)}}>Agregar</button>
    </div>
  )
};