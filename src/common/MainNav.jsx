import React from 'react'
import { Link } from "react-router-dom"
import logoUNI from '/assets/icons/logo_UNI.png'
import { BASE_ROUTE } from '../config';

function MainNav() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
            <div className="container-fluid">
                <Link className="navbar-brand" to={BASE_ROUTE}>
                    <img src={logoUNI} alt="Logo UNI" height="45" className="d-inline-block align-text-center p-0" />
                </Link>
                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Menu superior*/}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        {/* Elemento 01 */}
                        <li className="nav-item">
                            <Link className="nav-link" to={`${BASE_ROUTE}/Estudios`}>Estudios</Link>
                        </li>
                        {/* Elemento 02 */}
                        <li className="nav-item">
                            <Link className="nav-link" to={`${BASE_ROUTE}/Experiencia`}>Experiencia</Link>
                        </li>
                        {/* Elemento 03 */}
                        <li className="nav-item">
                            <Link className="nav-link" to={`${BASE_ROUTE}/Proyectos`}>Proyectos</Link>
                        </li>
                        {/* Elemento 04 */}
                        <li className="nav-item">
                            <Link className="nav-link" to={`${BASE_ROUTE}/Publicaciones`}>Publicaciones</Link>
                        </li>
                        {/* Elemento 05 */}
                        <li className="nav-item">
                            <Link className="nav-link" to={`${BASE_ROUTE}/Certifications`}>Certificaciones</Link>
                        </li>
                        {/* Elemento 06 */}
                        <li className="nav-item">
                            <Link className="nav-link" to={`${BASE_ROUTE}/Awards`}>Premios y reconocimientos</Link>
                        </li>
                        {/* Elemento 07 */}
                        <li className="nav-item">
                            <Link className="nav-link" to={`${BASE_ROUTE}/Other`}>Otras actividades</Link>
                        </li>
                        {/* Elemento 08 */}
                        <li className="nav-item">
                            <Link className="nav-link" to={`${BASE_ROUTE}/DigitalSkills`}>Competencias digitales</Link>
                        </li>
                        {/* Elemento 09 */}
                        <li className="nav-item">
                            <Link className="nav-link" to={`${BASE_ROUTE}/Languages`}>Idiomas</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MainNav