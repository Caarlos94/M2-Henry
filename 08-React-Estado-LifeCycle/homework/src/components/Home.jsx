import React from "react";
import Nav from './Nav.jsx'
import Card from "./Card.jsx";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteCity } from "../actions";
import './Home.css'

const Home = () => {

  const dispatch = useDispatch()
  const cities = useSelector(state => state.cities)

    const onClose = (id) =>{
    dispatch(deleteCity(id))
    }

    return(
      <div className="home">
        <Nav></Nav>
        <div className="cardsContainer">
        {
            cities.map(city => (
                <Card
                    key={city.id}
                    id={city.id}
                    max={Math.round(city.main.temp_max)}
                    min={Math.round(city.main.temp_min)}
                    name={city.name}
                    img={city.weather[0].icon}
                    onClose={onClose}
                ></Card>
            ))
        }
        </div>
      </div>
    )
}

export default Home