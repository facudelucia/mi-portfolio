import React from 'react';
import { useStateValue } from '../StateProvider';
const Footer = () => {
    const [{english}] = useStateValue()
    return ( 
        <footer id="footer">
            {english ? <p>Developed by facudelucia &copy;</p>:<p>Desarrollado por facudelucia &copy;</p>}
        </footer>
     );
}
 
export default Footer;