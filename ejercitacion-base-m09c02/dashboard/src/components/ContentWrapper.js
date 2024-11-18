import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import Tabla from './Tabla';


const peliculas = [
    { id: 1, titulo: 'The Mandalorian', rating: 8.7, premios: 4, length: 40, generos:["Accion,", " Ciencia Ficción"] },
    { id: 2, titulo: 'Avengers: Endgame', rating: 9.2, premios: 5, length: 180, generos:["Accion,", " Ficción"] },
    { id: 3, titulo: 'The Dark Knight', rating: 9, premios: 3, length: 152, generos:["Drama,", " Acción"] },
  ];

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <Tabla datosPelicula={peliculas} />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;