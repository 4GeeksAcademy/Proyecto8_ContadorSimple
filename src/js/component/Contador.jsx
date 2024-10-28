import React from "react";
import PropTypes from "prop-types";



const Contador = ({ divSeis, divCinco, divCuatro, divTres, divDos, divUno }) => {

    Contador.prototype = {
        divSeis: PropTypes.number,
        divCinco: PropTypes.number,
        divCuatro: PropTypes.number,
        divTres: PropTypes.number,
        divDos: PropTypes.number,
        divUno: PropTypes.number
    };

    return (
        <div className="contador">
            <div className="clock" ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
            </svg>
            </div>
            <div className="divseis">{divSeis % 10}</div>
            <div className="divCinco">{divCinco % 10}</div>
            <div className="divCuatro">{divCuatro % 10}</div>
            <div className="divTres">{divTres % 10}</div>
            <div className="divDos">{divDos % 10}</div>
            <div className="divUno">{divUno % 10}</div>
        </div>

    );

};




export default Contador