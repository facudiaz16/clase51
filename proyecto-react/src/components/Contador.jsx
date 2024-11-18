import React, {Component} from "react";
import PropTypes from 'prop-types'

class Contador extends Component{
    constructor(props){
        super(props);
        this.state = {
            numero: props.inicial,
            cargando: true
        }
    }
    incrementar (){
        this.setState(
            {numero: this.state.numero + 1}
        )
    }
    decrementar (){
        this.setState(
            {numero: this.state.numero - 1}
        )
    }

    componentDidMount() {
        console.log("Me monté");
        // Simula un tiempo de carga de 2 segundos
        setTimeout(() => {
            this.setState({ cargando: false }); // Deja de estar "cargando" después de 2 segundos
        }, 2000);
    }
    componentDidUpdate(){
        console.log("Me actualize!")
        
    }


    render(){
        return(
            <div>
            {this.state.cargando ? (
                <p>Cargando...</p> // Muestra "Cargando..." mientras el estado cargando sea true
            ) : (
                <>
                    <p>Soy el número: {this.state.numero}</p>
                    <button onClick={() => this.incrementar()}>Incrementar</button>
                    <button onClick={() => this.decrementar()}>Decrementar</button>
                </>
            )}
        </div>
        )
    }


}


export default Contador