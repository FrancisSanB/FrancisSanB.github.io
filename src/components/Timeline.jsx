import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
    return(
        <div className="md:w-3/4 lg:w-1/2 xl:w-1/3 px-6 md:px-0 flex flex-col md:flex-row justify-center mx-auto text-left">
            <div className="w-full">
            <Title>Timeline</Title>
            {timeline.map(item => (
                <TimelineItem
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
            </div>
        </div>
    )
}

export default Timeline;