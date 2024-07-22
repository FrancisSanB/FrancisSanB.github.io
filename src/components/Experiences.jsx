import React from "react";
import experiences from "../data/experiences";
import ExperienceItem from "./ExperienceItem";
import Title from "./Title";

function Timeline() {
    return(
        <div className="md:w-3/4 lg:w-1/2 xl:w-1/3 px-6 md:px-0 flex flex-col md:flex-row justify-center mx-auto text-left">
            <div className="w-full">
                <Title>Relevant Experience</Title>
                <p className="text-base mb-3 font-fira">
                    My relevant work experience. More information on my{' '}
                    <a 
                        href="https://www.linkedin.com/in/ffrancis47/" target="_blank" 
                        className="font-bold hover:underline underline-offset-2 decoration-2 decoration-link dark:decoration-dark-link" rel="noreferrer noopener"
                    >
                        LinkedIn
                    </a>
                </p>
                {experiences.map(item => (
                    <ExperienceItem
                        company={item.company}
                        imgUrl={item.imgUrl}
                        title={item.title}
                        duration={item.duration}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline;