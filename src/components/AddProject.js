import React,{useState} from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"
import "../AddProject.css"
import {useStateValue} from "../StateProvider"
function AddProject() {
    const history = useHistory()
    const [{ token }, dispatch] = useStateValue()
    if(!token){
        history.push("/login")
    }
     const [form, setForm] = useState({
        title: "",
        github: "",
        description: "",
        image: "",
        link: ""
    })
    const {title, github, description, image, link} = form
    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    } 
    const headers = {
        'Content-Type': 'application/json',
    } 
    const handleSubmit = async (e) =>{
        e.preventDefault()
            await axios.post(`https://mi-portfolio-facu.herokuapp.com/projects`,{
            "title": `${title}`,
            "github": `${github}`,
            "description": `${description}`,
            "image": `${image}`,
            "link": `${link}`,
            headers
          })
          .then(datos=>{
              console.log(datos)
          })
        
    }
    const handleReturn = async (e) => {
        e.preventDefault()
        history.push("/admin")
    }
    return (
        <>
        <div onClick={handleReturn} className="btn btn-success">
            Volver
        </div>
        <div className="addProject">
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="title" 
                        name="title"
                        value={title}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="form-group">
                    <label for="github">Github</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="github"
                        name="github"
                        value={github}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="description"
                        name="description"
                        value={description}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="form-group">
                    <label for="image">Image</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="image"
                        name="image"
                        value={image}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="form-group">
                    <label for="link">Link</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="link"
                        name="link"
                        value={link}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
    )
}

export default AddProject
