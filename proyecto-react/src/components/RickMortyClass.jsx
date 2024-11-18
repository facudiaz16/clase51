import { useState, useEffect, useRef } from "react";


const urlAPI = 'http://rickandmortyapi.com/api/character' 

function RickMortyFuncion(){
    const [personajes, setPersonajes] = useState([])
    const [pagina, setPagina] = useState(1)

    const subtitle = useRef()


    useEffect(() => {
        console.log("%cSe monto el componente", 'color: green')
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            setPersonajes(data.results)
        })
        .catch(error => console.error(error));
    }, [])

    useEffect(() => {
        console.log("%cSe actualizo el componente", 'color: yellow');
    }, [personajes])

    useEffect(()=>{
        return () => console.log("%cSe desmonto el componente", 'color: red')
    }, [])

    const cargarMas = async () => {
        await setPagina (pagina +1);
        console.log(pagina)
        console.log(`https://rickandmortyapi.com/api/character?page=${pagina}`)

        fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
        .then(response => response.json())
        .then(data => {
            setPersonajes(data.results)
        })
        .catch(error => console.error(error));
    }


    const cambiarH2 = () => {
        subtitle.current.style.color = 'Red'
        subtitle.current.innerText = 'Lo cambiamos con useRef'
    }

    return(
        <div>
            <h2 ref={subtitle}>Soy el componente Rick y Morty Función !!!</h2>
            <button onClick={cambiarH2}>Cambiar al H2</button>
            <ul>
                { personajes.length === 0 && <p>Cargando</p>}
                {
                    personajes.map((personaje, i)=>{
                        return (
                            <li key={i}>
                                <h3>{personaje.name}</h3>
                                <img src={personaje.image} alt="Avatar" width="150" />
                            </li>
                        )
                    })
                }
                <button onClick={cargarMas}>Siguiente Página</button>
            </ul>
        </div>
    )
}



export default RickMortyFuncion