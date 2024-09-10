import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import ProjectData from './../../data/projects';
import './Projects.css'

const ProjectEntry = ({ project, dates, description }) => (
    <div className="section">
        <div className="col">
            <div className="d-flex justify-content-between">
                <div className="project-position">{project}</div>
                <div className="project-dates">{dates}</div>
            </div>
            <div className='project-description mt-4 ps-5'>
                <ReactMarkdown>{description}</ReactMarkdown>                
            </div>
            <hr />
        </div>
    </div>
);

function Project() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Cargar los datos del archivo JSON
        setData(ProjectData);
    }, []);
    return (
        <section className="container-fluid canvas">
            <div className="container section-container">
                <h2>Proyectos de Consultoría</h2>
                {data.map((entry, index) => (
                    <ProjectEntry key={index} {...entry} />
                ))}
            </div>
        </section>
    )
}

export default Project