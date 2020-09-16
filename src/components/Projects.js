import React,{Fragment, useContext} from 'react';
import Navbar from "./Navbar"
import Footer from "./Footer"
import idiomaContext from "../idioma/idiomaContext"
const Projects = () => {
    const { english } = useContext(idiomaContext)
    /* const seeMore = (url)=>{
        window.open(url, "_blank")
    } */
    return (
        <Fragment>
            <Navbar />
            <div className="containerx">
                <div className="container-projects">
                <div className="content-projects animate__animated animate__backInDown">
                    <h1>{english ? "Projects" : "Proyectos"}</h1>
                    <div className="card-columns">
                        <div className="card">
                            <img src={"./assets/judo-scoreboard.png"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Judo Scoreboard app</h4>
                                <a href="https://judo-scoreboard.netlify.app/" target="_blank"> <button
                                    type="button"
                                    className="btn btn-outline-primary btn-block"
                                    /* onClick={()=>seeMore("https://judo-scoreboard.netlify.app/")} */
                                >{english ? "See more..." : "Ver más..."}</button></a>
                                <a id="githubAnchor" className="card-text" href="https://github.com/facudelucia/judo-scoreboard" target="_blank">{english ? "Link to github repository" : "Link a repositorio de github"}</a>
                            </div>
                        </div>
                        <div className="card">
                            <img src={"./assets/amongusimg.png"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Among Us Guide</h4>
                                <a href="https://guiaamongus.netlify.app/" target="_blank"> <button
                                    type="button"
                                    className="btn btn-outline-primary btn-block"
                                    /* onClick={()=>seeMore("https://judo-scoreboard.netlify.app/")} */
                                >{english ? "See more..." : "Ver más..."}</button></a>
                                <a id="githubAnchor" className="card-text" href="https://github.com/facudelucia/among-us-guide" target="_blank">{english ? "Link to github repository" : "Link a repositorio de github"}</a>
                            </div>
                        </div>
                        <div className="card">
                            <img src={"./assets/waimg.png"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Whatsapp Clone</h4>
                                <a href="https://facudeluciawhatsapp.netlify.app/" target="_blank"> <button
                                    type="button"
                                    className="btn btn-outline-primary btn-block"
                                    /* onClick={()=>seeMore("https://judo-scoreboard.netlify.app/")} */
                                >{english ? "See more..." : "Ver más..."}</button></a>
                                <a id="githubAnchor" className="card-text" href="https://github.com/facudelucia/whatsapp" target="_blank">{english ? "Link to github repository" : "Link a repositorio de github"}</a>
                            </div>
                        </div>
                        
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
            </div>
            <Footer />
        </Fragment>
     );
}
 
export default Projects;