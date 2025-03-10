import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import Title from "./Title";

function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchSubstackPosts() {
            try {
                const response = await fetch("https://alfredoosauce.substack.com/feed"); // Replace with your Substack RSS feed
                const text = await response.text();
                const parser = new DOMParser();
                const xml = parser.parseFromString(text, "application/xml");
                const items = Array.from(xml.querySelectorAll("item"))
                    .slice(0, 3) // Get the 3 most recent posts
                    .map(item => ({
                        title: item.querySelector("title")?.textContent || "Untitled",
                        desc: item.querySelector("description")?.textContent || "No description available.",
                        link: item.querySelector("link")?.textContent || "#",
                        tags: Array.from(item.querySelectorAll("category")).map(tag => tag.textContent) || []
                    }));
                setPosts(items);
            } catch (error) {
                console.error("Error fetching Substack posts:", error);
            }
        }
        fetchSubstackPosts();
    }, []);

    return (
        <div className="md:w-3/4 lg:w-1/2 xl:w-1/3 px-6 md:px-0 justify-center mx-auto text-left flex flex-col">
            <Title>Blog</Title>
            <p className="text-base mb-3 font-fira">
                My thoughts and insights. Read more on my{' '}
                <a 
                    href="https://alfredoosauce.substack.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:underline underline-offset-2 decoration-2 decoration-link dark:decoration-dark-link"
                >
                    Substack
                </a>
            </p>
            <div className="w-full grid grid-cols-1 gap-6 mb-9">
                {posts.map((post, index) => (
                    <BlogItem
                        key={index}
                        title={post.title}
                        tags={post.tags}
                        desc={post.desc}
                        link={post.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Blog;
