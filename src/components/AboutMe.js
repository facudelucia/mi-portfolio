import React, { Fragment, useContext } from 'react';
import idiomaContext from "../idioma/idiomaContext"
const AboutMe = () => {
    const { english } = useContext(idiomaContext)
    return (
        <Fragment>
            <div className="containerApp">
                <div className="aboutMe animate__animated animate__backInDown">
                        <img src={"./assets/IMG_20200723_222327_336.jpg"} className="aboutMe__picture"/>
                    <div className="aboutMe__social-media">
                    <a target="_blank" href="https://www.github.com/facudelucia"><i className="aboutMe__icon fab fa-github-square"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/in/facudelucia"><i className="aboutMe__icon fab fa-linkedin"></i></a>
                    </div>
                    <div className="aboutMe__description">
                        <h2>FACUNDO DE LUCIA</h2>
                        {english
                            ? <p>
                            Hi, I'm Facu, I'm 24 years old, I'm from the city of Rosario, Argentina. I am a web developer and I have knowledge in:
                            <span><strong>-</strong>
                                Layout and responsive design with tools like HTML, CSS (media queries, flexbox, grid), SASS, Material UI and Bootstrap.</span>
                                <span><strong>-</strong>Vanilla JS, ES6</span>
                                <span><strong>-</strong>React (Hooks, Context API, React Redux, Styled Components)</span>
                                <span><strong>-</strong>Angular (Angular maps, Angular material, Angularfire)</span>
                                <span><strong>-</strong>Authentication and CRUD operations in firebase.</span>
                                <span><strong>-</strong>Creation of APIs, authentications and CRUD operations with node, express and mongo.</span>
                                <span><strong>-</strong>Git knowledge.</span>
                            </p>
                            : <p>Hola soy Facu, tengo 24 años, soy de la ciudad de Rosario, Argentina. Soy desarrollador web y tengo conocimientos en:
                            <span><strong>-</strong>Maquetado y diseño responsivo con herramientas como HTML, CSS (media queries, flexbox, grid), SASS, Material UI y Bootstrap.</span>
                                <span><strong>-</strong>React (Hooks, Context API, React Redux, Styled Components)</span>
                                <span><strong>-</strong>Angular (Angular maps, Angular material, Angularfire)</span>
                                <span><strong>-</strong>Vainilla JS, ES6</span>
                                <span><strong>-</strong>Autenticaciones y operaciones CRUD en firebase.</span>
                                <span><strong>-</strong>Creacion de APIs, autenticaciones y operaciones CRUD con node, express y mongo.</span>
                                <span><strong>-</strong>Manejo de Git.</span>
                            </p>}
                        <a href={"./assets/CV.pdf"} download>{english ? "Download CV": "Descargar CV"} <i className="fas fa-file-download"></i></a>
                    </div>
                    
                </div>
                <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
            </div>
        </Fragment>
    );
}

export default AboutMe;