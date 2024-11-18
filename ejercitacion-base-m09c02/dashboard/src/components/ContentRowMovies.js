import React from "react";
import PropTypes from "prop-types";

function ContentRowMovies(props){
    return(
        <React.Fragment>
				<div className="container-fluid">
                <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>
            
                
                <div className="row">

                    {/*<!-- Movies in Data Base -->*/}
                    <div className="col-md-4 mb-4">
                        <div className={`card ${props.colorBorde} shadow h-100 py-2`}>
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.titulo}</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className={`fas ${props.icono} fa-2x text-gray-300`}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </React.Fragment>
    )
    
    
}
ContentRowMovies.propTypes = {
    titulo: PropTypes.string.isRequired,
    colorBorde: PropTypes.string.isRequired,
    cifra: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icono: PropTypes.string.isRequired
};
ContentRowMovies.defaultProps = {
    titulo: "No Title",
    colorBorde: "border-left-primary",
    cifra: "0",
    icono: "fa-film"
};

export default ContentRowMovies