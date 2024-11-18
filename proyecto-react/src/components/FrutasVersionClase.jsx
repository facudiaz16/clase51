import { useState } from "react";

function FrutasVersionFuncion (){

    const [listadoDeFrutas, setListadoDeFrutas] = useState(["Manzana", "Pera", "Naranja"]);

    const agregarFruta = e => {
        e.preventDefault()
        let nuevaFruta = e.target.nuevaFruta.value
        setListadoDeFrutas(
             [
                ...listadoDeFrutas, nuevaFruta
            ]
        )
        e.target.nuevaFruta.value = '';
    }

    return(
        <div>
            <h2>Soy el componente FRUTAS Funcion!!</h2>
            <ul>
                {
                    listadoDeFrutas.map((fruta, i) => {
                        return <li key={i}> {fruta}</li>
                    })
                } 
            </ul>
            <form onSubmit={agregarFruta}>
                <input name= "nuevaFruta" type="text" /> <br />
                <br />
                <button>Añadir Nueva Fruta</button>
            </form>
        </div>
    )

}



export default FrutasVersionFuncion