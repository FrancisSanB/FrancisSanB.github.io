import React from "react";

const icons = {
    code: (
        <svg class="h-5 w-5 text-icon dark:text-dark-icon"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />  
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  
            <path d="M10 13l-1 2l1 2" />  
            <path d="M14 13l1 2l-1 2" />
        </svg>
    ),
    presentation: (
        <svg class="h-5 w-5 text-icon dark:text-dark-icon"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <line x1="3" y1="4" x2="21" y2="4" />  
            <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />  
            <line x1="12" y1="16" x2="12" y2="20" />  <line x1="9" y1="20" x2="15" y2="20" />  
            <path d="M8 12l3 -3l2 2l3 -3" />
        </svg>
    ),
    paper: (
        <svg class="h-5 w-5 text-icon dark:text-dark-icon"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />  
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  
            <line x1="9" y1="9" x2="10" y2="9" />  
            <line x1="9" y1="13" x2="15" y2="13" />  
            <line x1="9" y1="17" x2="15" y2="17" />
        </svg>
    ),
}

function ProjectItem({ title, tags, desc, links }) {
    return(
        <div className="border border-boxes dark:border-dark-boxes rounded-md overflow-hidden w-full p-3">
            <h3 className="text-3xl mb-3 font-garamond">
                {title}
            </h3>
            <p className="flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm mb-3 font-fira">
                {tags.map(item => (
                    <span className="inline-block px-2 py-1 border-2 border-boxes dark:border-dark-boxes rounded-md">
                        {item}
                    </span>
                ))}
            </p>
            <p className="text-base font-fira mb-3">
                {desc}
            </p>
            <div className="flex flex-row gap-3 font-fira">
                {links.map(link => (
                    <a
                        href={link.url}
                        target="_blank"
                        className="flex items-center gap-1 hover:underline underline-offset-2 decoration-2 decoration-link dark:decoration-dark-link"
                    >
                        {icons[link.icon]}
                        <span>{link.text}</span>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default ProjectItem;