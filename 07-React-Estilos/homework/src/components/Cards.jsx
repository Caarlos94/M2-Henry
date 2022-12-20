import React from 'react';
import Card from './Card';
import styled from "styled-components"

const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  justify-content: center;
  align-items: center;
`

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <ContainerCards>
      {props.cities.map(
        city => <Card 
          max = {city.main.temp_max}
          min = {city.main.temp_min}
          name = {city.name}
          img = {city.weather[0].icon}
          onClose = {() => alert(city.name)}
          key = {city.id}>
          </Card>
      )}
    </ContainerCards>
  )
};