import React from "react";
import Title from "./Title";

function Intro() {
    return(
        <div className="md:w-3/4 lg:w-1/2 xl:w-1/3 pt-10 md:pt-20 px-6 md:px-0 justify-center mx-auto text-left flex flex-col">
            <h1 className="text-red font-bold text-6xl md:text7xl mb-1 md:mb-3">
                Francis Fernandez
            </h1>
            <p className="text-base text-xl mb-3 font-medium">
                Computer Science Student
            </p>
            <div className="flex gap-4 mb-9">
                <a href="https://github.com/FrancisSanB/" target="_blank">
                    <svg class="h-5 w-5 text-red"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        <title>GitHub</title>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/ffrancis47" target="_blank">
                    <svg class="h-5 w-5 text-red"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  
                        <circle cx="4" cy="4" r="2" />
                        <title>LinkedIn</title>
                    </svg>
                </a>
                <a href="mailto:f_alfred_fernandez@outlook.com" target="_blank">
                    <svg class="h-5 w-5 text-red"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                        <title>Email</title>
                    </svg>
                </a>
                <a href="assets/FrancisFernandez_Resume.pdf" target="_blank">
                    <svg class="h-5 w-5 text-red"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                        <polyline points="13 2 13 9 20 9" />
                        <title>Resume</title>
                    </svg>
                </a>
            </div>
            <div>
                <Title>About Me</Title>
            </div>
            <p className="text-base mb-3 font-medium">
                Hi and welcome to my website! I'm Francis, a fourth-year computer science student at{' '}
                <a 
                    href="https://www.sdsu.edu/" target="blank" 
                    className="font-bold hover:underline underline-offset-2 decoration-2 decoration-red" rel="noreferrer noopener"
                >
                    San Diego State University 
                </a>
                {' '}interested in the field of image processing and computer vision and excited about their applications in the health industry.
                Currenlty I working on different projects to increase my overall knowledge of computer science and dive deeper into the interactions
                between computers and images.
            </p>
            <p className="text-base mb-9 font-medium">
                In my free time, I like to{' '}
                <a 
                    href="https://letterboxd.com/alfredoo_sauce/films/diary/" target="blank" 
                    className="font-bold hover:underline underline-offset-2 decoration-2 decoration-red" rel="noreferrer noopener"
                >
                    watch movies, 
                </a>
                {' '}improve my{' '}
                <a 
                    href="https://innerfrench.com/" target="blank" 
                    className="font-bold hover:underline underline-offset-2 decoration-2 decoration-red" rel="noreferrer noopener"
                >
                     french
                </a>
                {' '}and, if I have the motivation, {' '}
                <a 
                    href="https://www.strava.com/athletes/97184275" target="blank" 
                    className="font-bold hover:underline underline-offset-2 decoration-2 decoration-red" rel="noreferrer noopener"
                >
                    run
                </a>
                .
            </p>
        </div>
    )
}

export default Intro;