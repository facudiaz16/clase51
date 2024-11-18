import React from "react";
import './pelicula.css'

function Pelicula(props){
   
    
    return(
        <div>

            <h2 className="sarasa">{props.titulo}</h2>
            <p>Rating: {props.rating}</p>
            <ul>
                {props.generos.map((genero,i) => <li key={genero + i} >{genero}</li>)}
            </ul>
        </div>
    )
}


export default Pelicula