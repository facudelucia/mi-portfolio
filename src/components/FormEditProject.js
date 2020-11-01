import React,{useState, useMemo} from 'react'
import { useStateValue } from '../StateProvider'
import "../FormEditProject.css"
import axios from "axios"
import {useHistory} from "react-router-dom"
function FormEditProject() {
    const [{ projects, projectId, token }, dispatch] = useStateValue()

    const idLower = projectId.toLowerCase()
    const history = useHistory()
    
    const getProjectById = (idLower) => {
        return (
            projects.find(project => project._id == idLower)
        );
    }
    const selectedProject = useMemo(() => getProjectById(idLower), [idLower]);

    const [form, setForm] = useState({
        title: selectedProject.title,
        github: selectedProject.github,
        description: selectedProject.description,
        image: selectedProject.image,
        link: selectedProject.link
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
            await axios.put(`https://mi-portfolio-facu.herokuapp.com/projects/${idLower}`,{
            "title": `${title}`,
            "github": `${github}`,
            "description": `${description}`,
            "image": `${image}`,
            "downloadLink": `${link}`,
            headers
          })
        
    }
    const handleDelete = async (e) =>{
        e.preventDefault()
        await axios.delete(`https://mi-portfolio-facu.herokuapp.com/${idLower}`,{
            headers
          })
    }
    const handleReturn = async (e) => {
        e.preventDefault()
        history.push("/admin")
    }
    return (
        <>
        <div onClick={handleDelete} className="btn btn-danger">
            Eliminar Proyecto
        </div>
        <div onClick={handleReturn} className="btn btn-success">
            Volver
        </div>
        <div className="formEditProject">
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

export default FormEditProject