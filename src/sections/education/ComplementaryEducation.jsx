import React, { useEffect, useState } from 'react';
import './Education.css';
import educationData from './../../data/complementEducationData';  // Asegúrate de ajustar la ruta si es necesario
import { BASE_ROUTE } from './../../config';

const EducationEntry = ({ imgSrc, altText, program, institution, periods }) => (
    <div className="col-md-6 mb-4">
        <div className="row">
            <div className="col-md-4">
                <img src={`${BASE_ROUTE}${imgSrc}`} alt={altText} className="img-fluid rounded-circle logo" />
            </div>
            <div className="col-md-8">
                <div className='academic-program mt-2'>{program}</div>
                <div className='institution mt-2'>{institution}</div>
                <div className='periods mt-2'>{periods}</div>
                {/* 
                <div className="button-container text-center">
                    <button className="btn btn-primary btn-custom">Ver detalles</button>
                </div>*/}
            </div>
        </div>
    </div>
);

function ComplementaryEducation() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Cargar los datos del archivo JSON
        setData(educationData);
    }, []);

    return (
        <div className="section">
            <h2>Formación Acádemica Complementaria</h2>
            <div className="container">
                <div className="row">
                    {data.map((entry, index) => (
                        <EducationEntry key={index} {...entry} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ComplementaryEducation;