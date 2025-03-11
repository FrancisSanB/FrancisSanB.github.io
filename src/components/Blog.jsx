import React, { useEffect, useState } from "react";
import Title from "./Title";

function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchSubstackPosts() {
            try {
                const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent("https://alfredoosauce.substack.com/feed")}`);
                const data = await response.json();
        
                const parser = new DOMParser();
                const xml = parser.parseFromString(data.contents, "application/xml");
        
                const items = Array.from(xml.querySelectorAll("item")).slice(0, 3).map(item => ({
                    title: item.querySelector("title")?.textContent || "Untitled",
                    desc: item.querySelector("description")?.textContent || "No description available.",
                    link: item.querySelector("link")?.textContent || "#",
                    date: item.querySelector("pubDate")?.textContent || "Unknown date",
                    image: item.querySelector("enclosure")?.getAttribute("url") || "", // Extract image
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
                    <div key={index} className="border border-boxes dark:border-dark-boxes rounded-md overflow-hidden w-full p-3">
                        {post.image && <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-md mb-2" />}
                        <h3 className="text-3xl mb-3 font-garamond">
                            {post.title}
                        </h3>
                        <p className="flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm mb-3 font-fira">
                        <span className="inline-block px-2 py-1 border-2 border-boxes dark:border-dark-boxes rounded-md">
                            {new Date(post.date).toLocaleDateString()}
                        </span>
                        </p>
                        <p className="text-base font-fira mb-3">
                            {post.desc}
                        </p>
                        <a 
                            href={post.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-1 hover:underline underline-offset-2 decoration-2 decoration-link dark:decoration-dark-link"
                        >
                            <svg class="h-5 w-5 text-icon dark:text-dark-icon"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                            </svg>

                            Read More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
