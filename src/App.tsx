import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Academics from "./components/Academics/Academics";
import Tech from "./components/Technology/Tech";
import Project from "./components/Projects/Project";
import StarsCanvas from "./components/Contact/Star";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <div className="bg-black min-h-screen w-full">
          <About />
          <Tech />
          <Project />
          <Academics />

          <div className="relative z-0 bg-primary">
            {/* Contact Section */}
            <div className="relative z-10">
              <Contact />
            </div>

            {/* Stars only behind Contact */}
            <div className="absolute inset-0 z-0">
              <StarsCanvas />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
