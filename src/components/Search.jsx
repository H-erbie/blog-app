import React, { useEffect, useState } from "react";
import data from "../data";
import { useGlobalContext } from "../Contex";
const Search = () => {
  const {blogs, setBlogs} = useGlobalContext();
  const [term, setTerm] = useState("");
  
  useEffect(()=>{
    setBlogs(data.filter(item => item.name.includes(term) ))
  },[term, blogs])
  return (
    <form  className="form-container">
      <input
        type="search"
        placeholder="search a blog"
        id="search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </form>
  );
};

export default Search;
