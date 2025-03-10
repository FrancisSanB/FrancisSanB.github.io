import React from "react";
import { Link } from "react-router-dom";

function BlogItem({ title, tags, desc, link }) {
    return (
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1">
                <Link 
                    to={link} 
                    className="text-link dark:text-dark-link hover:underline"
                >
                    {title}
                </Link>
            </h3>
            <p className="text-sm text-gray-600 mb-2">{desc}</p>
            <div className="flex gap-2 mb-2">
                {tags.map(tag => (
                    <span key={tag} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
            <Link 
                to={link} 
                className="text-link dark:text-dark-link font-bold hover:underline"
            >
                Read More →
            </Link>
        </div>
    );
}

export default BlogItem;
