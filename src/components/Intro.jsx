import React, { useState, useEffect } from "react";

function Intro() {
    //declare theme and set theme and instatiate those variables
    const [theme, setTheme] = useState(localStorage.getItem('color-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

    //when 'theme' changes, add/remove dark element to root element
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('color-theme', theme);
    }, [theme]);

    //function used to toggle between the themes
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return(
        <div className="md:w-3/4 lg:w-1/2 xl:w-1/3 pt-10 md:pt-20 px-6 md:px-0 justify-center mx-auto text-left flex flex-col">
            <h1 className="text-title dark:text-dark-title font-garamond font-bold text-6xl md:text7xl mb-1 md:mb-3">
                Francis Fernandez
            </h1>
            <p className="text-base text-xl mb-3 font-fira">
                Computer Science Student
            </p>
            <div className="flex gap-4 mb-9">
                <a href="https://github.com/FrancisSanB/" target="_blank">
                    <svg class="h-5 w-5 text-icon dark:text-dark-icon"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        <title>GitHub</title>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/ffrancis47" target="_blank">
                    <svg class="h-5 w-5 text-icon dark:text-dark-icon"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  
                        <circle cx="4" cy="4" r="2" />
                        <title>LinkedIn</title>
                    </svg>
                </a>
                <a href="mailto:f_alfred_fernandez@outlook.com" target="_blank">
                    <svg class="h-5 w-5 text-icon dark:text-dark-icon"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                        <title>Email</title>
                    </svg>
                </a>
                <a href="assets/FrancisFernandez_Resume.pdf" target="_blank">
                    <svg class="h-5 w-5 text-icon dark:text-dark-icon"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                        <polyline points="13 2 13 9 20 9" />
                        <title>Resume</title>
                    </svg>
                </a>
                <button id="theme-toggle" type="button" onClick={toggleTheme}>
                    {theme == 'light' ? (
                        <svg id="theme-toggle-dark-icon" class="h-5 w-5 text-icon"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                    ) : (
                        <svg id="theme-toggle-light-icon" class="h-5 w-5 text-dark-icon"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                        </svg>
                    )}
                </button>
            </div>
        </div>
    )
}

export default Intro;