import React from "react";
import blogs from "../data/blogs";
import BlogItem from "./BlogItem";
import Title from "./Title";

function Blog() {
    return (
        <div className="md:w-3/4 lg:w-1/2 xl:w-1/3 px-6 md:px-0 justify-center mx-auto text-left flex flex-col">
            <Title>Blog</Title>
            <p className="text-base mb-3 font-fira">
                My thoughts and insights.
            </p>
            <div className="w-full grid grid-cols-1 gap-6 mb-9">
                {blogs.map(blog => (
                    <BlogItem
                        key={blog.title}
                        title={blog.title}
                        tags={blog.tags}
                        desc={blog.desc}
                        link={blog.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Blog;
