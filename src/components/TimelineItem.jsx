import React from "react";

function TimelineItem({ company, imgUrl, title, duration, link}) {
    return(
        <a href={link} target="_blank">
        <ol className="flex flex-col hover:bg-slate-200 rounded-lg my-3 p-3">
            <li>
                <p className="flex flex-row gap-4 items-center justify-start text-xs md:text-sm">
                    <a href={link} target="_blank">
                        <img 
                            src={imgUrl}
                            alt="portfolio"
                            className="w-full h-9 md:h-12 rounded-lg object-cover cursor-pointer"
                        />
                    </a>
                    <div className="flex flex-col">
                        <span className="inline-block px-2 py-1 font-semibold text-white bg-red rounded-md">
                            {company}
                        </span>
                        <h3 className="text-lg text-stone-900">
                            {title}
                        </h3>
                    </div>
                    
                    <div className="text-sm font-normal leading-none text-stone-400 ml-auto">
                        {duration}
                    </div>
                </p>
            </li>
        </ol>
        </a>
    )
}

export default TimelineItem;