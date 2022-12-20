import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './CityDetail.css'

const CityDetail = ({city}) => {    
    return(
         <div className="detailContainer">
                <div className="container">
                    <div className="info">
                    <h3>{city[0].name}</h3>
                        <div>Temperatura: {city[0].main.temp} ºC</div>
                        <div>Clima: {city[0].weather[0].main}</div>
                        <div>Viento: {city[0].wind.speed} km/h</div>
                        <div>Cantidad de nubes: {city[0].clouds.all}</div>
                        <div>Latitud: {city[0].coord.lat}º</div>
                        <div>Longitud: {city[0].coord.lon}º</div>
                        <button className="botonDetail">
                        <Link to="/home">Regresar</Link>
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default CityDetail