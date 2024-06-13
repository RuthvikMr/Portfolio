import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import User from "./Assets/json/ruthvik.json";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
          <Home
            name={User.user_bio.full_name}
            passing_message={User.user_bio.passing_message}
            contact={User.user_bio.contact}
            workExp={User.user_bio.yearOfExperience}
          />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About
          tools={User.tools}
          skills={User.skills}
          name={User.user_bio.full_name}
          address={User.user_bio.address}
          designation={User.user_bio.designation}
          company={User.user_bio.company}
          qualification={User.user_bio.qualification}
          college={User.user_bio.college_name}
          hobby={User.user_bio.hobby}
          />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer 
        name={User.user_bio.full_name} 
        contact={User.user_bio.contact} />
      </div>
    </Router>
  );
}

export default App;
