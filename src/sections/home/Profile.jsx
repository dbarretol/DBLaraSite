import React from 'react'

function Profile() {
    return (
        <div className="container section-container">
            <h2>Profesional Profile</h2>
            <div className="row d-flex align-items-center">
                <div className="col-md-3 col-sm-12">
                    <img src="DBLaraSite/assets/images/photo.png" alt="Foto de perfil"/>
                </div>
                <div className="col-md-9 col-sm-12 text-center">
                    <p>
                        Doctor en energética, con Maestría en Gerencia e Ingeniería de Mantenimiento. Ingeniero mecánico-electricista titulado y colegiado (CIP 330188) con sólida formación académica y experiencia internacional, candidato a MBA. Investigador RENACYT Nivel VII.<br />
                        Experiencia en docencia, investigación en aerogeneradores offshore y consultoría en gestión de mantenimiento en el sector energético. En particular, en gestión de mantenimiento en el sector de perforación petrolera y en auditorías de gestión de mantenimiento en central de ciclo combinado.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile