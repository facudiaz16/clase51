import React from "react";
import PropTypes from "prop-types"

function Fila(props){
    return(
    <tr>
        <td>{props.id}</td>
        <td>{props.titulo}</td>
        <td>{props.rating}</td>
        <td>{props.premios}</td>
        <td>{props.length}</td>
        <td>{props.generos}</td>
    </tr>
    )

}
Fila.propTypes = {
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    premios: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired,
    generos: PropTypes.string.isRequired
  };

export default Fila