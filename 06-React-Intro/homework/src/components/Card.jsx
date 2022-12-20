import React from 'react';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  //return <div>Card Component</div>
  return (
    <div>
      <p>Temperatura Máxima: {max}</p>
      <p>Temperatura Mínima: {min}</p>
      <p>Nombre de la Ciudad: {name}</p>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="imagen" />
      <button onClick={onClose}>X</button>
    </div>
  )

};