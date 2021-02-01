import React, { Fragment, useEffect, useState} from 'react';
import validator from "validator"
import Swal from "sweetalert2"
import {db} from "../firebase/firebaseConfig"
import useSpinner from "../spinner/useSpinner"
import { useStateValue } from '../StateProvider';
const Contact = () => {
    const [{english}] = useStateValue()
    const [form, setForm] = useState({
        email:"",
        msg:""
    })
    const {email, msg} = form
    
    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!validator.isEmail(email)){
            if(english){
                return Swal.fire("Error", "Email is required", "error")
            }else{
                return Swal.fire("Error", "Debes ingresar un email", "error")
            }
            
        }else if(msg.trim()===""){
            if(english){
                return Swal.fire("Error", "Message is required", "error")
            }else{
                return Swal.fire("Error", "Debes ingresar un mensaje", "error")
            }
        }
        db.doc().set({
            email: email,
            msg: msg
        }).then(()=>{
            console.log("data saved")
        }).catch((error)=>{
            console.log(error)
        })
        if(english){
           Swal.fire("Success!", "Your message was sent", "success") 
        }else{
            Swal.fire("Muy bien!", "Tu consulta fue enviada", "success")
        }
        
        setForm({
            email:"",
            msg:""
        })
    }
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
                {isLoading 
                ? spinner 
                : <>
                    <div className="contact animate__animated animate__backInDown">
                    <div className="contact__location">
                        <h2>{english ? "Where am I?":"Dónde estoy?"}</h2>
                        <div className="contact__map">
                            <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107134.74394330352!2d-60.766680106335095!3d-32.95204570879521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b6539335d7d75b%3A0xec4086e90258a557!2sRosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1597703148465!5m2!1ses!2sar"} width="400" height="300" frameBorder="0" style={{ border: "0" }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                        </div>
                    </div>
                    <div className="contact__contactSection">
                        <h2>{english ? "Contact me":"Contáctame"}</h2>
                        <form className="contact__form" onSubmit={handleSubmit}>
                            <label>{english ? "Enter your email so that I can contact you":"Ingresá tu email para que pueda contactarme contigo"}</label>
                            <input 
                                type="email" 
                                className="contact__input"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                            />
                            <label>{english ? "Enter your message":"Ingresá tu consulta"}</label>
                            <textarea 
                                className="contact__input"
                                name="msg"
                                value={msg}
                                onChange={handleInputChange}
                            />
                            <input type="submit" className="contact__btn" value={english ?"SEND" :"ENVIAR"} />
                        </form>
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
        </Fragment>
    );
}

export default Contact;