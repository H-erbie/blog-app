import React from 'react'
import { Link } from 'react-router-dom'
const Blog = ({img, name, content, id, author, datePosted}) => {
    
  return (
    <Link to={`/blogs/${name}`} className='blog'>
        <div className="blog-img"><img src={img} alt={name} /></div>
        <div className="blog-info">
        <p className="post-name">{name}</p>
        <p className="brief">{content.slice(0, 100)}...</p>
        <div className="blog-info-info">
        <p className="author">By {author}</p>
        <span className="date">{datePosted}</span>
        </div>
        </div>
    </Link>
  ) 
}

export default Blog