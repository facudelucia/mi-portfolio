import React,{Fragment, useContext} from 'react';
import Navbar from "./Navbar"
import Footer from "./Footer"
import idiomaContext from "../idioma/idiomaContext"
import Typical from 'react-typical'
const Home = () => {
    const { english } = useContext(idiomaContext)
    return (
        <Fragment>
            <Navbar />
            <div className="containerx">
                <div className="content-home">
                <Typical 
                loop={Infinity}
                className="typical"
                wrapper="h1"
                steps={[
                  "facudelucia()",
                  1000,
                  "Welcome to my portfolio",
                  1000,
                  "Bienvenido a mi portfolio",
                  1000
                ]}
              />
                    <p>{english ? "Web developer":"Desarrollador web"}</p>
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
 
export default Home;