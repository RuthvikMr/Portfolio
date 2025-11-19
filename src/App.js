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
  Navigate,
  useLocation
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "./components/NewsAI/News";
import IFrameComponent from "./components/Guide/Guide";
import Welcome from "./components/V2/Welcome/Welcome";
import Workfolio from "./components/V2/Works/Work";
import AboutV2 from "./components/V2/About/About";
import HomeV2 from "./components/V2/Home/Home";
import Insights from "./components/V2/Insights/Insights";

function AppContent() {
  const location = useLocation();
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {location.pathname !== "/" && <Navbar />}
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Welcome bio={User.user_bio} />
            }
          />
          <Route path="/home" element={
            <Home
            name={User.user_bio.full_name}
            passing_message={User.user_bio.passing_message}
            contact={User.user_bio.contact}
            workExp={User.user_bio.yearOfExperience}
          />} />
          <Route path="/project" element={<Projects />} />
          <Route
            path="/about"
            element={
              <About
                tools={User.tools}
                skills={User.skills}
                name={User.user_bio.full_name}
                address={User.user_bio.address}
                designation={User.user_bio.designation}
                company={User.user_bio.company}
                qualification={User.user_bio.qualification}
                college={User.user_bio.college_name}
                hobby={User.user_bio.hobby}
                education={User.user_bio.education}
              />
            }
          />
          <Route path="/resume" element={<Resume file={User.resumeLink} />} />
          <Route path="/news" element={<News />} />
          <Route
            path="/guide"
            element={<IFrameComponent iframe={User.iframe} />}
          />
          <Route
            path="/v2/work"
            element={<Workfolio/>}
          />
          <Route
            path="/v2/about"
            element={<AboutV2 passing_message={User.user_bio.passing_message}/>}
          />
          <Route
            path="/v2/home"
            element={<HomeV2/>}
          />
          <Route
            path="/v2/insight"
            element={<Insights/>}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        {/* Footer will also not show on /v2 */}
        {location.pathname !== "/" && (
          <Footer
            name={User.user_bio.full_name}
            contact={User.user_bio.contact}
          />
        )}
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
