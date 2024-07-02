import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {
    return(
        <div className="md:w-3/4 lg:w-1/2 xl:w-1/3 px-6 md:px-0 justify-center mx-auto text-left flex flex-col">
            <Title>Projects</Title>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="w-full grid grid-cols-1 gap-4 mb-9">
                    {portfolio.map(project => (
                        <PortfolioItem
                            imgUrl={project.imgUrl}
                            title={project.title}
                            stack={project.stack}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;