import "./App.css";
import Blogs from "./components/Blogs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InsideBlog from "./components/InsideBlog";
import Topbar from "./components/Topbar";
import Notfound from "./Notfound";
function App() {
  return (
    <div className="App">
      <Router>
      <Topbar/>
        <Routes>
          <Route path="/" element={<Blogs />}/>
          <Route path="/blogs/:name" element={<InsideBlog/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
