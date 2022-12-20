import React from "react";
import './Landing.css'
import { Link } from "react-router-dom";

const Landing = () => {
    return(
        <div className="landingPage">

            <div className="landingContainer">
                <p className="landingTitle">Weather App</p>
                <Link to = "/home">
                    <button className="landingBoton">Enter</button>
                </Link>
            </div>

        </div>
    )
}

export default Landing