import React from "react";

function BlogItem({ title, tags, desc, link }) {
    return (
        <div className="border border-boxes dark:border-dark-boxes rounded-md overflow-hidden w-full p-3">
            <h3 className="text-3xl mb-3 font-garamond">
                <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {title}
                </a>
            </h3>
            <p className="text-base font-fira mb-3">
                {desc}
            </p>
            <div className="flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm mb-3 font-fira">
                {tags.map(tag => (
                    <span key={tag} className="inline-block px-2 py-1 border-2 border-boxes dark:border-dark-boxes rounded-md">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex flex-row gap-3 font-fira">
                <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 hover:underline underline-offset-2 decoration-2 decoration-link dark:decoration-dark-link"
                >
                    <svg className="h-5 w-5 text-icon dark:text-dark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                    Read More
                </a>
            </div>
        </div>
    );
}

export default BlogItem;
