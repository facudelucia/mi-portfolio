import React from 'react';
import {NavLink} from "react-router-dom";
import { useStateValue } from '../StateProvider';


const Navbar = () => {
    const [{english}, dispatch] = useStateValue()
    const handleBurger = () => {
        const burger = document.querySelector(".burger")
        const nav = document.querySelector(".nav-links");
        const navLinks = document.querySelectorAll(".nav-links li");
        nav.classList.toggle("nav-active");
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = ""
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        })
        burger.classList.toggle("toggle")
    }
    const handleEspanol = () =>{
        dispatch({
            type: "ESPANOL"
        })
    }
    const handleEnglish = () =>{
        dispatch({
            type:"ENGLISH"
        })
    }
    return ( 
        <nav>
            <div className="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">LANG</button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <button className="dropdown-item" onClick={handleEspanol}>Español</button>
                    <button className="dropdown-item" onClick={handleEnglish}>English</button>
                </div>
            </div>
            <div className="logo">
                <h4></h4>
            </div>
            <ul className="nav-links">
                <li>
                    <NavLink exact activeClassName="active" className="anchor" exact to="/">{english ? "HOME":"INICIO"}</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="active" className="anchor" exact to="/aboutme">{english ? "ABOUT ME":"SOBRE MI"}</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="active" className="anchor" exact to="/projects">{english ? "PROJECTS":"PROYECTOS"}</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="active" className="anchor" exact to="/contact">{english ? "CONTACT":"CONTACTO"}</NavLink>
                </li>
            </ul>
            <div className="burger" onClick={handleBurger}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
     );
}
 
export default Navbar;