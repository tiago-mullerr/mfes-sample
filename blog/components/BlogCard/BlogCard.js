import React from "react";

const BlogCard = ({ title, content }) => {
    return (
        <div className="card">
            <span>{title}</span>
            <span>{content}</span>
        </div>
    );
}

export default BlogCard;