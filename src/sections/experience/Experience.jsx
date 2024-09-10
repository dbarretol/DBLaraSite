import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import experienceData from './../../data/experience';
import './Experience.css'

const ExperienceEntry = ({ position, company, dates, description }) => (
    <div className="section">
        <div className="col">
            <div className="d-flex justify-content-between">
                <div className="experience-position">{position}</div>
                <div className="experience-dates">{dates}</div>
            </div>
            <div className="experience-company">{company}</div>
            <div className='experience-description mt-4 ps-5'>
                <ReactMarkdown>{description}</ReactMarkdown>                
            </div>
            <hr />
        </div>
    </div>
);

function Experience() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Cargar los datos del archivo JSON
        setData(experienceData);
    }, []);
    return (
        <section className="container-fluid canvas">
            <div className="container section-container">
                <h2>Experiencia laboral</h2>
                {data.map((entry, index) => (
                    <ExperienceEntry key={index} {...entry} />
                ))}
            </div>
        </section>
    )
}

export default Experience