import React from 'react';
import styled from "styled-components"

const ContainerSearch = styled.div`
  margin-bottom: 25px;
`
const ContainerInput = styled.input`
  margin-right: 5px;
  width: 200px;
`
const ContainerBoton = styled.button`
  color: green;
  border: thin solid green;
  cursor: pointer;
  &:hover{
    color: red;
    border: thin solid red;
    transition: all 0.5s;
  }
`

export default function SearchBar(props) {
  // acá va tu código
  return (
    <ContainerSearch>
      <ContainerInput type="text" placeholder='Ciudad...'></ContainerInput>
      <ContainerBoton onClick={()=>props.onSearch()}>Agregar</ContainerBoton>
    </ContainerSearch>
  )
};