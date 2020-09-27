import React,{Fragment} from 'react';
const Projects = () => {
    return (
        <Fragment>
            <div className="containerApp">
                <div className="projects">
                    <div className="projects__container">
                        <div className="projects__row">
                            <div className="projects__card">
                                <div className="projects__card-header">
                                    <img src={"./assets/judo-scoreboard.png"}/>
                                </div>
                                <div className="projects__card-body">
                                    <h2>Judo Scoreboard App</h2>
                                    <a href="https://judo-scoreboard.netlify.app/" target="_blank" className="projects__btn">See more</a>
                                    <a className="projects__anchor" href="https://github.com/facudelucia/judo-scoreboard" target="_blank">See github repository</a>
                                </div>
                            </div>
                            <div className="projects__card">
                                <div className="projects__card-header">
                                    <img src={"./assets/waimg.png"}/>
                                </div>
                                <div className="projects__card-body">
                                    <h2>WhatsApp Clone</h2>
                                    <a href="https://facudeluciawhatsapp.netlify.app/" target="_blank" className="projects__btn">See more</a>
                                    <a className="projects__anchor" href="https://github.com/facudelucia/whatsapp" target="_blank">See github repository</a>
                                </div>
                            </div>
                            <div className="projects__card">
                                <div className="projects__card-header">
                                    <img src={"./assets/amongusimg.png"}/>
                                </div>
                                <div className="projects__card-body">
                                    <h2>Among Us Guide</h2>
                                    <a href="https://guiaamongus.netlify.app/" target="_blank" className="projects__btn">See more</a>
                                    <a className="projects__anchor" href="https://github.com/facudelucia/among-us-guide" target="_blank">See github repository</a>
                                </div>
                            </div>
                            <div className="projects__card">
                                <div className="projects__card-header">
                                    <img src={"./assets/amazon.png"}/>
                                </div>
                                <div className="projects__card-body">
                                    <h2>Amazon Clone</h2>
                                    <a href="https://facu-amazon.netlify.app/" target="_blank" className="projects__btn">See more</a>
                                    <a className="projects__anchor" href="https://github.com/facudelucia/amazon-full" target="_blank">See github repository</a>
                                </div>
                            </div>
                        </div>
                        <div className="projects__row">
                        <div className="projects__card">
                                <div className="projects__card-header">
                                    <img src={"./assets/fbclone.png"}/>
                                </div>
                                <div className="projects__card-body">
                                    <h2>Facebook Clone</h2>
                                    <a href="https://fb-clone-b6160.web.app/" target="_blank" className="projects__btn">See more</a>
                                    <a className="projects__anchor" href="https://github.com/facudelucia/facebook" target="_blank">See github repository</a>
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
        </Fragment>
     );
}
 
export default Projects;