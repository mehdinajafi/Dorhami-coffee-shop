import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/Blog.css";

const Blog = () => {
    // posts array keep posts as object 
    // this array set in useEffect that get data with axios from:
    // https://my-json-server.typicode.com/MehdiNjfi/coffee-shop-json-file/Gallery
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/MehdiNjfi/coffee-shop-json-file/Gallery')
            .then(res => {
                setPosts(res.data)
            })
    }, [])
    return (
        <section id="blog">
            {
                // Start map posts
                posts.map(post => {
                    return (
                    <div key={post.id} className="blog-preview">
                        <img src={post.img} alt={post.title} className="blog-preview-img"/>
                        <div className="blog-preview-post">
                            <h3 className="blog-preview-post-title">{post.title}</h3>
                            <p className="blog-preview-post-body">{post.body}</p>
                        </div>
                    </div>
                )})
                // End map posts
            }
        </section>
    )
}

export default Blog;