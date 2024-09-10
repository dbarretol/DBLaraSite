import React, { useEffect, useState } from 'react';
import PubData from './../../data/publications';

const PublicationEntry = ({ pub_title, pub_date, pub_url, pub_site, pub_type }) => (
    <div className="section">
        <div className='linked'>
            <a href={pub_url} target="_blank" rel="noopener noreferrer">
                <strong>{pub_title}</strong>
            </a>
        </div>
        <div>{pub_date}</div>
        <div>{pub_site}</div>
        <div>{pub_type}</div>
        <hr></hr>
    </div>
);

function Publications() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Cargar los datos del archivo JSON
        setData(PubData);
    }, []);

    return (
        <section className="container-fluid canvas">
            <div className="container section-container">
                <h2>Publicaciones</h2>
                {data.map((entry, index) => (
                    <PublicationEntry key={index} {...entry} />
                ))}
            </div>
        </section>
    )
}

export default Publications