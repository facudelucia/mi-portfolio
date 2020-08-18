import React,{Fragment, useContext} from 'react';
import Navbar from "./Navbar"
import Footer from "./Footer"
import idiomaContext from "../idioma/idiomaContext"
const Home = () => {
    const { english } = useContext(idiomaContext)
    return (
        <Fragment>
            <Navbar />
            <div className="containerx">
                <div className="content-home">
                    <h1>facudelucia_</h1>
                    <p>{english ? "Web developer":"Desarrollador web"}</p>
                    
                </div>
            </div>
            <Footer />
        </Fragment>
     );
}
 
export default Home;