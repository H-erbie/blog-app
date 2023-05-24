import React, { useContext, useEffect, useState } from "react";
import data from "./data";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(data);
  return <AppContext.Provider value={{blogs, setBlogs}}>{children}</AppContext.Provider>;
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
