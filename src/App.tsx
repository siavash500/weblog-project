import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Navbar from "./components/Navbar.tsx";
import "./components/style/App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar className='navbar'/> 
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}