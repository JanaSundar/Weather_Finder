import React from "react";
import Tilt from "react-tilt";


export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <div className="container">
           <Tilt
                className="parent  mx-auto"
                options={{
                max: 15
                }}
                style={{
                height: 50,
                width: 200
                }}
            >
                <a className="navbar-brand" href="/"><i className="fas fa-cloud-sun-rain fa-2x"></i><span className="brand"> Forecaz</span></a>
                </Tilt>
            </div>
        </nav>
    );
}


