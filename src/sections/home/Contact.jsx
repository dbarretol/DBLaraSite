import React from 'react';
import { TfiEmail, TfiMobile } from "react-icons/tfi";
import { MdOutlinePlace } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { SiResearchgate } from "react-icons/si";
import { FaOrcid } from "react-icons/fa6";

const ContactItem = ({ href, Icon, text }) => (
    <div className="col-auto">
        {href ? (
            <a href={href} className="d-flex align-items-center text-decoration-none" target="_blank" rel="noopener noreferrer">
                <Icon className="custom-icon me-2" />
                <span className="text">{text}</span>
            </a>
        ) : (
            <div className="d-flex align-items-center">
                <Icon className="custom-icon me-2" />
                <span className="text">{text}</span>
            </div>
        )}
    </div>
);

function Contact() {
    return (
        <div className="section">
            <h2>Contacto</h2>
            <div className="row d-flex flex-wrap justify-content-center align-items-center g-4">
                <ContactItem
                    Icon={MdOutlinePlace}
                    text="Rímac, Lima, Perú"
                />
                <ContactItem
                    Icon={TfiMobile}
                    text="[A solicitud]"
                />
                <ContactItem
                    href="mailto:dbarretol@outlook.com"
                    Icon={TfiEmail}
                    text="dbarretol@outlook.com"
                />
                <ContactItem
                    href="https://pe.linkedin.com/in/dbarretol"
                    Icon={BsLinkedin}
                    text="dbarretol"
                />
                <ContactItem
                    href="https://www.researchgate.net/profile/David-Barreto-Lara"
                    Icon={SiResearchgate}
                    text="dbarretol"
                />
                <ContactItem
                    href="https://orcid.org/0000-0002-0134-1291" // Asegúrate de usar el URL correcto para ORCID
                    Icon={FaOrcid}
                    text="dbarretol"
                />
            </div>
        </div>
    );
}

export default Contact;