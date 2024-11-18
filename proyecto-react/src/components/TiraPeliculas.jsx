import React, {Component} from "react";
import Pelicula from "./Pelicula";

class TiraPeliculas extends Component{
    lanzarAlerta(){
        alert("Me Clickeaste!!")
    }
    cambiarAmarillo(){
        document.querySelector("body").style.backgroundColor = "Yellow"
    }
    cambiarRosa(){
        document.querySelector("body").style.backgroundColor = "Blue"
    }

    render(){
        
        return (
            <div onClick={this.lanzarAlerta} onMouseOut={this.cambiarRosa} onMouseOver={this.cambiarAmarillo}>
            <Pelicula generos={["Fantasia", "Aventuras"]} rating="8.5" titulo= "Toy Story" />
            <Pelicula generos={["Animacion", "Infantil"]}  rating="9" titulo= "Rey León"/>
            <Pelicula generos={["Terror", "Drama"]} rating="6" titulo= "Huye"/>
        
            </div>
        )
        
    } 
}

export default TiraPeliculas