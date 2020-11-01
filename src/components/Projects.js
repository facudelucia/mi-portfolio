import React, { Fragment, useEffect, useState } from 'react';
import useSpinner from '../spinner/useSpinner';
import { useStateValue } from '../StateProvider';
import ProjectCard from './ProjectCard';
import axios from "axios";
const Projects = () => {
    const [spinner, showSpinner, hideSpinner] = useSpinner()
    const [isLoading, setIsLoading] = useState(true)
    const[{projects}, dispatch]=useStateValue()
    useEffect(() => {
        showSpinner()
        const getProjects = async () => {
            await axios.get("https://mi-portfolio-facu.herokuapp.com/projects")
                .then(datos => {
                    dispatch({
                        type: "GET_PROJECTS",
                        projects: datos.data.projects
                    })
                    hideSpinner()
                    setIsLoading(false)
                })
        }
        getProjects()


    }, [])
    return (
        <Fragment>

            <div className="containerApp">
                <div className="projects">
                    {isLoading
                        ? spinner
                        :
                        <>
                        {projects.map(project=>(
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                link={project.link}
                                github={project.github}
                                img={project.image}
                            />
                        ))}
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