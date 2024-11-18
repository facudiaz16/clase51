import React from "react";
import Fila from "./Fila";

function Tabla(props){
    return(
        <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Rating</th>
            <th>Premios</th>
            <th>Duración</th>
            <th>Generos</th>
          </tr>
        </thead>
        <tbody>
          {props.datosPelicula.map((row, i) => (
            <Fila
              key={i}
              id={row.id}
              titulo={row.titulo}
              rating={row.rating}
              premios={row.premios}
              length={row.length}
              generos={row.generos}
            />
          ))}
        </tbody>
      </table>
    </div>
    )
}

export default Tabla