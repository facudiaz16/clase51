import React, {Component} from "react";

class Gif extends Component{
    constructor(props){
        super(props);
        this.state ={
            gif: ""
        }
    }
    apiCall(url,consecuencia){
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
    }

    componentDidMount() {
        console.log("Me monté");
        this.crearGif()
    }
    crearGif(){
        this.apiCall("https://api.giphy.com/v1/gifs/random?api_key=lp7wQ6914aPRmDI6HePRPpQeZXyxLFkU&tag=&rating=G", this.mostrarGif)
    }
    mostrarGif = (data)=>{
        console.log(data)
        this.setState({
            gif: data.data.images.original.url
        })
    }

    componentDidUpdate(){
        console.log("Me actualize!")
        alert("Tengo un Gif nuevo")
    }
    

    render(){
        let contenido;

        if(this.state.gif==""){
            contenido = <p>Cargando...</p>
        }else{
            contenido = <img src={this.state.gif} /> 
        }

        return(
            <div>
            {contenido}
            <button onClick={()=>this.crearGif()}>Random Gif!</button>
        </div>
        )
    }

}

export default Gif