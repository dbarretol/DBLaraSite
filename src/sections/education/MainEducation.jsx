import React from 'react';
import './Education.css'

const EducationEntry = ({ imgSrc, altText, program, institution, periods }) => (
    <div className="col-md-6 mb-4">
        <div className="row">
            <div className="col-md-3">
                <img src={imgSrc} alt={altText} className="img-fluid rounded-circle" />
            </div>
            <div className="col-md-9">
                <div className='academic-program'>{program}</div>
                <div className='institution'>{institution}</div>
                <div className='periods'>{periods}</div>
                <div className="button-container text-start">
                    <button className="btn btn-primary btn-custom">Ver detalles</button>
                </div>

            </div>
        </div>
    </div>
);

function MainEducation() {
    const educationData = [
        {
            imgSrc: "public/assets/logos/ESAN.jpg",
            altText: "Logo ESAN",
            program: "Master of Business Administration (MBA)",
            institution: "ESAN Graduate School of Business",
            periods: "2023/09 - 2024/09"
        },
        {
            imgSrc: "public/assets/logos/UNI.jpg",
            altText: "Logo UNI",
            program: "Doctoral studies in energy",
            institution: "National University of Engineering",
            periods: "2016/03 - 2020/09"
        },
        {
            imgSrc: "public/assets/logos/URP.jpg",
            altText: "Logo URP",
            program: "Specialization Program",
            institution: "University Ricardo Palma",
            periods: "2014/03 - 2016/09"
        }
    ];

    return (
        <div className="section">
            <h2>Formación Acádemica</h2>
            <div className="container">
                <div className="row">
                    {educationData.map((entry, index) => (
                        <EducationEntry key={index} {...entry} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainEducation;