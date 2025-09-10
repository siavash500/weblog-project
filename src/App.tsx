import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Navbar from "./components/Navbar.tsx";
import BlogList from "./data/BlogList.tsx"; 
import BlogDetailsWrapper from "./data/BlogDetailsWrapper.tsx";
import "./components/style/App.css";
import Login from "./components/Form/Login.tsx"
import Signup from "./components/Form/Signup.tsx"
// App.tsx
export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar className='navbar'/> 
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:id" element={<BlogDetailsWrapper />} />
            <Route path="/login" element={<Login/>} />  

            <Route path="register" element={<Signup/>}/>
          </Routes>
          
        </div>
      </div>
    </BrowserRouter>
  );
}
