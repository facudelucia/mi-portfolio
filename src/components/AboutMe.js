import React, { Fragment } from 'react';
import { useStateValue } from '../StateProvider';
const AboutMe = () => {
    const [{ english }] = useStateValue()
    return (
        <Fragment>
            <div className="containerApp">
                <div className="aboutMe animate__animated animate__backInDown">
                    <img src={"./assets/facu-foto.jpg"} className="aboutMe__picture" />
                    <div className="aboutMe__social-media">
                        <a target="_blank" href="https://www.github.com/facudelucia"><i className="aboutMe__icon fab fa-github-square"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/in/facudelucia"><i className="aboutMe__icon fab fa-linkedin"></i></a>
                    </div>
                    <div className="aboutMe__description">
                        <h2>FACUNDO DE LUCIA</h2>
                        {english
                            ? <p>
                                Hi, I'm Facu, I'm 24 years old, I was born and live in the city of Rosario, Argentina. I am a web developer and I have knowledge in:
                            <span><strong>-</strong>
                                Layout and responsive design with tools like HTML, CSS (media queries, flexbox, grid), SASS, Material UI and Bootstrap.</span>
                                <span><strong>-</strong>Vanilla JS, ES6</span>
                                <span><strong>-</strong>React</span>
                                <span><strong>-</strong>Angular</span>
                                <span><strong>-</strong>Firebase</span>
                                <span><strong>-</strong>Node</span>
                                <span><strong>-</strong>Mongo</span>
                                <span><strong>-</strong>Git</span>
                                <br></br>
                                <span>Work Experience:</span>
                                <span><strong>-</strong>SouthernMinds</span>
                                <span>Frontend Developer</span>
                                <span>HTML, CSS, Bootstrap, Jquery, Javascript</span>
                                <span>Dec 2020 - Mar 2021</span>
                            </p>
                            : <p>Hola soy Facu, tengo 24 años, nací y vivo en la ciudad de Rosario, Argentina. Soy desarrollador web y tengo conocimientos en:
                            <span><strong>-</strong>Maquetado y diseño responsivo con herramientas como HTML, CSS (media queries, flexbox, grid), SASS, Material UI y Bootstrap.</span>
                                <span><strong>-</strong>React</span>
                                <span><strong>-</strong>Angular</span>
                                <span><strong>-</strong>Vainilla JS, ES6</span>
                                <span><strong>-</strong>Firebase</span>
                                <span><strong>-</strong>Node</span>
                                <span><strong>-</strong>Mongo</span>
                                <span><strong>-</strong>Git</span>
                                <br></br>
                                <span>Experiencia laboral:</span>
                                <span><strong>-</strong>SouthernMinds</span>
                                <span>Frontend Developer</span>
                                <span>HTML, CSS, Bootstrap, Jquery, Javascript</span>
                                <span>Dic 2020 - Mar 2021</span>
                            </p>}
                        <a href={"./assets/CV.pdf"} download>{english ? "Download CV" : "Descargar CV"} <i className="fas fa-file-download"></i></a>
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