
import Home from "./home.jsx";
import Contact from "./contact.jsx";
import About from "./about.jsx";
import Portfolio from "./portfolio.jsx";
import {HashRouter,Routes,Route } from "react-router-dom";


function App() {
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
            </Routes>
        </HashRouter>

    )
}

export default App
