import React from "react";
import projects from "../data/projects";
import ProjectItem from "./ProjectItem";
import Title from "./Title";

function Projects() {
    return(
        <div className="md:w-3/4 lg:w-1/2 xl:w-1/3 px-6 md:px-0 justify-center mx-auto text-left flex flex-col">
            <Title>Relevant Projects</Title>
            <p className="text-base mb-3 font-medium">
                My relevant projects. More information on my{' '}
                <a 
                    href="assets/FrancisFernandez_Resume.pdf" target="_blank" 
                    className="font-bold hover:underline underline-offset-2 decoration-2 decoration-red" rel="noreferrer noopener"
                >
                    resume
                </a>
            </p>
            <div className="w-full grid grid-cols-1 gap-6 mb-9">
                {projects.map(project => (
                    <ProjectItem
                        title={project.title}
                        tags={project.tags}
                        desc={project.desc}
                        links={project.links}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects;