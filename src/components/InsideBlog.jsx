import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data";
import Notfound from "../Notfound";

const InsideBlog = () => {
  const { name } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    setDetails(data.filter((item) => item.name === name));
    
  });
  if(details.length == 0){
        return <Notfound/>
    }   
  return (
    <div className="inside-container">
      {details.map((item) => {
        const { id, name, datePosted, author, content, img } = item;
        return (
          <article className="inside-dets">
                        <p className="inside-date">Date posted : {datePosted}</p>
            <h3 className="inside-heading"><Link to='/' className="go-home">Home</Link> / {name}</h3>
            <div className="inside-img">
              <img src={img} alt={name} />
            </div>
            <p className="inside-content">{content}</p>
            <p className="inside-author">Article by {author}</p>
            <Link to='/'> <button className="btn go-home bottom">&lt; Go Home</button>
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default InsideBlog;
