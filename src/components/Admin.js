import React, { useEffect } from 'react'
import { useStateValue } from '../StateProvider'
import axios from "axios"
import { useHistory } from "react-router-dom"
function Admin() {
    const history = useHistory()
    const [{ projects, token }, dispatch] = useStateValue()
    if(!token){
        history.push("/login")
    }
    useEffect(() => {
        const getProjects = async () => {
            await axios.get("https://mi-portfolio-facu.herokuapp.com/projects")
                .then(datos => {
                    console.log(datos)
                    dispatch({
                        type: "GET_PROJECTS",
                        projects: datos.data.projects
                    })
                })
        }
        getProjects()
    }, [])
    
    const handleEdit = (e) => {
        e.preventDefault()
        dispatch({
            type: "GET_ID",
            projectId: e.target.parentElement.parentElement.firstChild.innerText
        })
        history.replace("/editproject")
    }
    const handleAdd = (e) => {
        e.preventDefault()
        history.push("/addproject")
    }
    const handleLogout = (e) =>{
        e.preventDefault()
        history.push("/login")
        dispatch({
            type: "LOGOUT"
        })
    }
    return (
        <>
            <div onClick={handleAdd} className="btn btn-success">
                Agregar Proyecto
        </div>
            <div onClick={handleLogout} className="btn btn-danger">
                Logout
        </div>
            <div className="admin">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="text-white" scope="col">Id</th>
                            <th class="text-white" scope="col">Titulo</th>
                            <th class="text-white" scope="col">Opcion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map(project => (
                            <tr>
                                <td class="text-white" scope="row">{project._id}</td>
                                <td class="text-white">{project.title}</td>
                                <td>
                                    <button onClick={handleEdit} className="btn btn-info">
                                        Editar
                                </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Admin