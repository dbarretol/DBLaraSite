import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logoUNI from '/assets/icons/logo_UNI.png';

function MainNav() {
    // Hook de estado para controlar el colapso del menú
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    // Función para manejar el clic en el botón del navbar
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    // Función para cerrar el menú al hacer clic en un enlace
    const closeNav = () => setIsNavCollapsed(true);

    return (
        <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" onClick={closeNav}>
                    <img src={logoUNI} alt="Logo UNI" height="45" className="d-inline-block align-text-center p-0" />
                </Link>
                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={!isNavCollapsed}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Menu superior */}
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        {/* Elemento 01 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/Estudios" onClick={closeNav}>Estudios</Link>
                        </li>
                        {/* Elemento 02 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/Experiencia" onClick={closeNav}>Experiencia</Link>
                        </li>
                        {/* Elemento 03 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/Proyectos" onClick={closeNav}>Proyectos</Link>
                        </li>
                        {/* Elemento 04 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/Publicaciones" onClick={closeNav}>Publicaciones</Link>
                        </li>
                        {/* Elemento 05 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/Certifications" onClick={closeNav}>Certificaciones</Link>
                        </li>
                        {/* Elemento 06 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/Awards" onClick={closeNav}>Premios y reconocimientos</Link>
                        </li>
                        {/* Elemento 07 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/Other" onClick={closeNav}>Otras actividades</Link>
                        </li>
                        {/* Elemento 08 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/DigitalSkills" onClick={closeNav}>Competencias digitales</Link>
                        </li>
                        {/* Elemento 09 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/Languages" onClick={closeNav}>Idiomas</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MainNav;