import React from 'react';
import styled from "styled-components"

const Container = styled.div`
  border: 1.5px solid gray;
  width: 300px;
  height: 180px;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(https://www.cinepremiere.com.mx/wp-content/uploads/2022/10/Naruto-20-aniversario-video-900x506.jpg);
  background-size: cover;
  color: white;
  font-size: 1.5rem;
  `
const ContainerData = styled.div`
  display:flex;
  justify-content: space-evenly;
  align-items: flex-start;
  `
const Boton = styled.button`
  background-color: #f00000;
  width: 25px;
  height: 30px;
  cursor: pointer;
  border-radius: 3px;
  line-height: 25px;
  color: white;
  border: none;
  position: absolute;
  top: 10px;
  right: 15px;
`

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
    <Container>
      <Boton onClick={onClose}>X</Boton>
      <h4>{name}</h4>
      <ContainerData>
      <div>
        <p>Min</p>
        <p>{min}°</p>
      </div>
      <div>
        <p>Max</p>
        <p>{max}°</p>
      </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="imagen" ></img>
      </ContainerData>
    </Container>
  )
};