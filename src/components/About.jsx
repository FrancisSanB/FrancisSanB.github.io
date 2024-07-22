import React  from "react";
import Title from "./Title";

function About() {
    return(
        <div className="md:w-3/4 lg:w-1/2 xl:w-1/3 px-6 md:px-0 justify-center mx-auto text-left flex flex-col">
            <Title>About Me</Title>
            <p className="text-base mb-3 font-fira">
                Hi and welcome to my website! I'm Francis, a fourth-year computer science student at{' '}
                <a 
                    href="https://www.sdsu.edu/" target="blank" 
                    className="font-bold hover:underline underline-offset-2 decoration-2 decoration-link dark:decoration-dark-link" rel="noreferrer noopener"
                >
                    San Diego State University 
                </a>
                {' '}interested in the field of image processing and computer vision and excited about their applications in the health industry.
                Currenlty I am working on different projects to increase my overall knowledge of computer science and dive deeper into the interactions
                between computers and images.
            </p>
            <p className="text-base mb-9 font-fira">
                In my free time, I like to{' '}
                <a 
                    href="https://letterboxd.com/alfredoo_sauce/films/diary/" target="blank" 
                    className="font-bold hover:underline underline-offset-2 decoration-2 decoration-link dark:decoration-dark-link" rel="noreferrer noopener"
                >
                    watch movies, 
                </a>
                {' '}improve my{' '}
                <a 
                    href="https://innerfrench.com/" target="blank" 
                    className="font-bold hover:underline underline-offset-2 decoration-2 decoration-link dark:decoration-dark-link" rel="noreferrer noopener"
                >
                     french
                </a>
                {' '}and, if I have the motivation, {' '}
                <a 
                    href="https://www.strava.com/athletes/97184275" target="blank" 
                    className="font-bold hover:underline underline-offset-2 decoration-2 decoration-link dark:decoration-dark-link" rel="noreferrer noopener"
                >
                    run
                </a>
                .
            </p>
        </div>
    )
}

export default About;