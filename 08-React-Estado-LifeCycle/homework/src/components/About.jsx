import React from "react";
import { Link } from "react-router-dom";
import './About.css'

const About = () => {
    return (
        <div className="aboutPage">
        <div className="containerAbout">
          <h3 className="titulo">Bienvenid@ a Weather App!!</h3>
          <p className="textoAbout">
            Esta App fue desarrollada como un proyecto personal usando 
            la <a target="_blank" className="enlaceAbout" rel="noreferrer" href="https://openweathermap.org/api">Weather API</a> y utilizando las tecnologías 
            aprendidas en la carrera de Full Stack Developer de <a className="enlaceAbout" rel="noreferrer" target="_blank" href="https://www.soyhenry.com/">SoyHenry</a>.
          </p>
          <p className="textoAbout">
            Las tecnologias usadas para este proyecto fueron <b>React</b> con <b>Redux</b> para 
            el desarrollo del front end y CSS Modules para
            el estilizado de la App.
          </p>
          <button className="botonAbout">
            <Link to="/home">Regresar</Link>
          </button>
        </div>
      </div>
    )
}

export default About