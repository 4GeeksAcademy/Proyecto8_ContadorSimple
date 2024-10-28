//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Contador from "./component/Contador.jsx";

//render your react application

let contador = 0;

setInterval(function () {

    const conSeis = Math.floor(contador / 100000);
    const conCinco = Math.floor(contador / 10000);
    const conCuatro = Math.floor(contador / 1000);
    const conTres = Math.floor(contador / 100);
    const conDos = Math.floor(contador / 10);
    const conUno = Math.floor(contador / 1);
    contador++;


    ReactDOM.createRoot(document.getElementById('app')).render(
        <Contador
            divUno={conUno}
            divDos={conDos}
            divTres={conTres}
            divCuatro={conCuatro}
            divCinco={conCinco}
            divSeis={conSeis}
        />
    );
}, 1000);