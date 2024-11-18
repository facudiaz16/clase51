import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import GenresInDb from './GenresInDb';
import LastMovie from './LastMovie';

function ContentRowTop(){
	const metricas = [
        {
            titulo: 'Movies in Data Base',
            colorBorde: 'border-left-primary',
            cifra: 21,
            icono: 'fa-film'
        },
        {
            titulo: 'Total awards',
            colorBorde: 'border-left-success',
            cifra: 79,
            icono: 'fa-award'
        },
        {
            titulo: 'Actors quantity',
            colorBorde: 'border-left-warning',
            cifra: 60,
            icono: 'fa-user'
        }
    ];
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid" >
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<div className="row">
                    {/* Renderizar las métricas usando el componente ContentRowMovies */}
                    {metricas.map((metrica, i) => (
                        <ContentRowMovies
                            key={i}
                            titulo={metrica.titulo}
                            colorBorde={metrica.colorBorde}
                            cifra={metrica.cifra}
                            icono={metrica.icono}
                        />
                    ))}
                </div>
					</div>
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<LastMovie />
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<GenresInDb />
					</div>
				
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;