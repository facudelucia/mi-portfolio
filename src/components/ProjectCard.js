import React from 'react'

function ProjectCard({ title, description, img, link, github }) {
    return (
        <div className="projectCard">
            <div className="projects__card-header">
                <img src={img} />
            </div>
            <div className="projects__card-body">
                <h2>{title}</h2>
                <p className="projects__description">{description}</p>
                <a href={link} target="_blank" className="projects__btn">See more</a>
                <a className="projects__anchor" href={github} target="_blank">See github repository</a>
            </div>
        </div>
    )
}

export default ProjectCard
