import React from "react";
function ContenedorPublicidad(props){
    return (

        <>
        <p>---Inicio de espacio publicitario</p>
        {props.children}
        <p>---Fin de espacio publicitario</p>


        </>
    )
}

export default ContenedorPublicidad