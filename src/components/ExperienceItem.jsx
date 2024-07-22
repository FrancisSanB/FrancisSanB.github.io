import React from "react";

function ExperienceItem({ company, imgUrl, title, duration, link}) {
    return(
        <a href={link} target="_blank">
            <ol className="flex flex-col hover:bg-hover dark:hover:bg-dark-hover rounded-lg my-3 p-3">
                <li>
                    <p className="flex flex-row gap-4 items-center justify-start font-fira">
                        <a href={link} target="_blank">
                            <img 
                                src={imgUrl}
                                alt="portfolio"
                                className="aspect-square h-12 rounded-lg object-contain cursor-pointer"
                            />
                        </a>
                        <div className="flex flex-col grow sm:flex-row">
                            <div className="sm:flex sm:flex-col">
                                <span className="inline-block px-2 py-1 font-semibold text-xs md:text-sm text-background dark:text-dark-background bg-title dark:bg-dark-title rounded-md">
                                    {company}
                                </span>
                                <h3 className="text-base text-boxes dark:text-dark-boxes">
                                    {title}
                                </h3>
                            </div>
                            <div className="text-sm font-light leading-none opacity-50 sm:ml-auto sm:my-auto">
                                {duration}
                            </div>
                        </div>
                    </p>
                </li>
            </ol>
        </a>
    )
}

export default ExperienceItem;