import React,{Fragment, useEffect, useState} from 'react';
import useSpinner from '../spinner/useSpinner';
const Projects = () => {
    const [spinner, showSpinner, hideSpinner] = useSpinner()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        showSpinner()
        setTimeout(() => {
            hideSpinner()
            setIsLoading(false)
        }, 2000);
    }, [])
    return (
        <Fragment>
            
            <div className="containerApp">
                <div className="projects">
                    {isLoading 
                    ? spinner 
                    :
                        <>
                           <div className="projects__container">
                        <div className="projects__row">
                            <div className="projects__card">
                                <div className="projects__card-header">
                                    <img src={"./assets/judo-scoreboard.png"}/>
                                </div>
                                <div className="projects__card-body">
                                    <h2>Judo Scoreboard App</h2>
                                    <p className="projects__description">React - Bootstrap</p>
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
                                    <p className="projects__description">MongoDB - Express - React - Node</p>
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
                                    <p className="projects__description">React - Bootstrap</p>
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
                                    <p className="projects__description">React - Firebase</p>
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
                                    <p className="projects__description">React - Firebase</p>
                                    <a href="https://fb-clone-b6160.web.app/" target="_blank" className="projects__btn">See more</a>
                                    <a className="projects__anchor" href="https://github.com/facudelucia/facebook" target="_blank">See github repository</a>
                                </div>
                            </div>
                            <div className="projects__card">
                                <div className="projects__card-header">
                                    <img src={"./assets/tinder.png"}/>
                                </div>
                                <div className="projects__card-body">
                                    <h2>Tinder Clone</h2>
                                    <p className="projects__description">MongoDB - Express - React - Node</p>
                                    <a href="https://facutinder.netlify.app" target="_blank" className="projects__btn">See more</a>
                                    <a className="projects__anchor" href="https://github.com/facudelucia/tinder" target="_blank">See github repository</a>
                                </div>
                            </div>
                            <div className="projects__card">
                                <div className="projects__card-header">
                                    <img src={"./assets/tiktok.png"}/>
                                </div>
                                <div className="projects__card-body">
                                    <h2>Fake Tik Tok</h2>
                                    <p className="projects__description">React</p>
                                    <a href="https://facutiktok.netlify.app" target="_blank" className="projects__btn">See more</a>
                                    <a className="projects__anchor" href="https://github.com/facudelucia/tiktok" target="_blank">See github repository</a>
                                </div>
                            </div>
                            <div className="projects__card">
                                <div className="projects__card-header">
                                    <img src={"./assets/milei.png"}/>
                                </div>
                                <div className="projects__card-body">
                                    <h2>Soundboard Javier Milei</h2>
                                    <p className="projects__description">React</p>
                                    <a href="https://frasesmilei.netlify.app" target="_blank" className="projects__btn">See more</a>
                                    <a className="projects__anchor" href="https://github.com/facudelucia/frases-milei" target="_blank">See github repository</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                        </>
                    }
                    
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