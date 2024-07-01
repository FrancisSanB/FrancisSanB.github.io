import React from "react";
import Title from "./Title";

function Intro() {
    return(
        <div className="w-1/2 md:w-1/3 mx-auto justify-center flex flex-col text-left pt-20 pb-6">
            <h1 className="text-red font-bold text-6xl md:text7xl mb-1 md:mb-3">
                Francis Fernandez
            </h1>
            <p className="text-base text-xl mb-6 font-medium">
                Computer Science Student
            </p>
            <div>
                <Title>About Me</Title>
            </div>
            <p className="text-base mb-6 font-medium">
                A rising junior at{' '}
                <a 
                    href="https://www.sdsu.edu/" target="blank" 
                    className="font-bold hover:underline underline-offset-2 decoration-2 decoration-red" rel="noreferrer noopener"
                >
                    San Diego State University 
                </a>
                {' '}majoring in Computer Science. Studying with 4th year standing 
                as an honors student with an interest in Data Science and Artificial Intelligence. Involved in various projects 
                at the {' '}
                <a 
                    href="https://aiclub.sdsu.edu/" target="blank" 
                    className="font-bold hover:underline underline-offset-2 decoration-2 decoration-red" rel="noreferrer noopener"
                >
                    Artificial Intelligence Club
                </a>
                {' '}and the{' '}
                <a 
                    href="https://www.sdsurocketproject.org/" target="blank" 
                    className="font-bold hover:underline underline-offset-2 decoration-2 decoration-red" rel="noreferrer noopener"
                >
                    SDSU Rocket Project
                </a>
                . Currently interested in the field of medical 
                image processing and looking for internships in that sector
            </p>
        </div>
    )
}

export default Intro;