import React,{useContext} from 'react';
import idiomaContext from "../idioma/idiomaContext"
const Footer = () => {
    const { english } = useContext(idiomaContext)
    return ( 
        <footer id="footer">
            {english ? <p>Developed by facudelucia &copy;</p>:<p>Desarrollado por facudelucia &copy;</p>}
        </footer>
     );
}
 
export default Footer;