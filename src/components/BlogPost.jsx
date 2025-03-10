import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blogs"; // Import the blogs array

function BlogPost() {
    const { slug } = useParams(); // Get the blog slug from the URL
    const blog = blogs.find(blog => blog.slug === slug); // Find the matching blog post
    const [content, setContent] = useState("");

    useEffect(() => {
        if (blog && blog.contentFile) {
            fetch(blog.contentFile)
                .then(response => response.text())
                .then(text => setContent(text))
                .catch(error => setContent("Error loading blog content."));
        }
    }, [blog]);

    if (!blog) return <p className="text-center text-lg">Blog post not found.</p>;

    return (
        <div className="md:w-3/4 lg:w-1/2 xl:w-1/3 pt-10 md:pt-20 px-6 md:px-0 justify-center mx-auto text-left flex flex-col">
            <h1 className="text-title dark:text-dark-title font-garamond font-bold text-6xl md:text7xl mb-1 md:mb-3">{blog.title}</h1>
            <div className="flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm mb-3 font-fira">
                {blog.tags.map(tag => (
                    <span key={tag} className="inline-block px-2 py-1 border-2 border-boxes dark:border-dark-boxes rounded-md">
                        {tag}
                    </span>
                ))}
            </div>
            <p className="text-base text-xl mb-3 font-fira">{blog.desc}</p>
            {content.split("\n").map((paragraph, index) =>
                paragraph.trim() ? (
                    <p key={index} className="text-base mb-3 font-fira">
                        {paragraph}
                    </p>
                ) : null
            )}
        </div>
    );
}

export default BlogPost;
