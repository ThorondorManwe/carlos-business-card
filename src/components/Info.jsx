import React from "react";
import perfil from '../assets/miPerfil.png';

export default function Info() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };


    return(
        <div className="infoDiv">
            <img src={perfil} className="perfilPhoto" />
            <h1>Carlos Rangel</h1>
            <p id="frontend">Frontend Developer</p>
            <p id="site"><a href="https://carlosrangel.net/">carlosrangel.net</a></p>

            <div className="buttons">
                <a href="mailto:carlos@carlosrangel.net"><button className="email"><i className="fa fa fa-envelope"></i> Email</button></a>
                <button className="linkedin" onClick={() => openInNewTab('https://www.linkedin.com')} ><i className="fab fa-linkedin"></i> Linkedin</button>
            </div>
        </div>
    )
}