import React from "react";
import Search from "./Search";
import Blog from "./Blog";
import { useGlobalContext } from "../Contex";
import Notfound from "../Notfound";

const Blogs = () => {
  const { blogs } = useGlobalContext();
  
  return (
    <section className="blogs-container">
      <article className="search-form">
        <Search />
      </article>
      <article className="blogs">
        {
          blogs.length == 0 ?
            
              <Notfound/>
            
          :
        blogs.map((item) => (
          <Blog key={item.id} {...item} />
        ))}
      </article>
    </section>
  );
};

export default Blogs;
