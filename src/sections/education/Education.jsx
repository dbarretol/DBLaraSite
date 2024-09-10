import React from 'react'
import MainEducation from './MainEducation'
import ComplementaryEducation from './ComplementaryEducation'

function Education() {
    return (
        <section className="container-fluid canvas">
            <div className="container section-container">
                <MainEducation />
                <ComplementaryEducation />
            </div>
        </section>
    )
}

export default Education