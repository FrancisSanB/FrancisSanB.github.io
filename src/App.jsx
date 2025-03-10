import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import About from "./components/About";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost"; // Import the BlogPost component

function App() {
  return (
    <Router>
      <div className="App bg-background text-normal dark:bg-dark-background dark:text-dark-normal">
        <Routes>
          {/* Home Page with all sections */}
          <Route
            path="/"
            element={
              <>
                <Intro />
                <About />
                <Projects />
                <Experiences />
                <Blog />
                <Footer />
              </>
            }
          />
          {/* Dynamic blog post page */}
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
