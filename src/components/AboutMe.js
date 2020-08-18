import React, { Fragment, useContext } from 'react';
import Navbar from "./Navbar"
import Footer from "./Footer"
import idiomaContext from "../idioma/idiomaContext"
const AboutMe = () => {
    const { english } = useContext(idiomaContext)
    return (
        <Fragment>
            <Navbar />
            <div className="containerx container-about">
                <div className="content content-about">
                    <div id="picture">
                        <img src={"./assets/IMG_20200723_222327_336.jpg"} />
                    </div>
                    <div className="social-media">
                    <a target="_blank" href="https://www.github.com/facudelucia"><i className="icon fab fa-github-square"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/in/facudelucia"><i className="icon fab fa-linkedin"></i></a>
                    </div>
                    <div id="description">
                        <h2>FACUNDO DE LUCIA</h2>
                        {english
                            ? <p>
                            Hi, I'm Facu, I'm 24 years old, I'm from the city of Rosario, Argentina. I am a web developer and I have knowledge in:
                            <span><strong>-</strong>
                                Layout and responsive design with tools like HTML, CSS (media queries, flexbox) and Bootstrap.</span>
                                <span><strong>-</strong>Javascript, React and React Hooks.</span>
                                <span><strong>-</strong>Authentication and CRUD operations in firebase.</span>
                                <span><strong>-</strong>Creation of APIs, authentications and CRUD operations with node, express and mongo.</span>
                                <span><strong>-</strong>Git handle.</span>
                            </p>
                            : <p>Hola soy Facu, tengo 24 años, soy de la ciudad de Rosario, Argentina. Soy desarrollador web y tengo conocimientos en:
                            <span><strong>-</strong>Maquetado y diseño responsivo con herramientas como HTML, CSS (media queries, flexbox) y Bootstrap.</span>
                                <span><strong>-</strong>Javascript, React y React Hooks.</span>
                                <span><strong>-</strong>Autenticaciones y operaciones CRUD en firebase.</span>
                                <span><strong>-</strong>Creacion de APIs, autenticaciones y operaciones CRUD con node, express y mongo.</span>
                                <span><strong>-</strong>Manejo de Git.</span>
                            </p>}
                        <a href={"./assets/CV.pdf"} download>{english ? "Download CV": "Descargar CV"} <i className="fas fa-file-download"></i></a>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default AboutMe;