import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link , useLocation} from "react-router-dom";
import { TbLanguageHiragana } from "react-icons/tb";
import { MdInsights } from "react-icons/md";
import { BiBookReader } from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import  languageJson  from '../Assets/json/languages.json'
import { useTranslation } from 'react-i18next';
import "./Navbar.css";
import {
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null);
  const [isOpen,setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const handleChange = (lang) => {
    localStorage.setItem('language',JSON.stringify(lang))
    setSelectedLang(lang);
    updateLanguage(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || languageJson[0];
    if(typeof savedLanguage === 'string') {
      setSelectedLang(JSON.parse(savedLanguage))
    } else {
      setSelectedLang(savedLanguage);
    }
}, []);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const updateLanguage = (event) => {
    try {
      i18n.changeLanguage(event.value);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {/* V1 HOME */}
            {/* <Nav.Item>
              <Nav.Link as={Link} to="/home" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t('navbar.home')}
              </Nav.Link>
            </Nav.Item> */}

            {/* V2 HOME */}
            <Nav.Item>
              <Nav.Link as={Link} to="/v2/home" onClick={() => updateExpanded(false)}
              className={location.pathname.startsWith("/v2/home") ? "active" : ""}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            {/* V1 Projects */}
            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                {t('navbar.projects')}
              </Nav.Link>
            </Nav.Item> */}

            {/* V1 News  */}
            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/news"
                onClick={() => updateExpanded(false)}
                className={location.pathname.startsWith("/news") ? "active" : ""}
              >
                <FaRegNewspaper
                  style={{ marginBottom: "2px" }}
                />{" "}
                {t('navbar.news')}
              </Nav.Link>
            </Nav.Item> */}

            {/* V1 Guide  */}
            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/guide"
                onClick={() => updateExpanded(false)}
                className={location.pathname.startsWith("/guide") ? "active" : ""}
              >
                <BiBookReader style={{ marginBottom: "2px" }} /> {t('navbar.guide')}
              </Nav.Link>
            </Nav.Item> */}

              {/* V1 About */}
            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t('navbar.about')}
              </Nav.Link>
            </Nav.Item> */}

            {/* V2 About  */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/v2/about"
                onClick={() => updateExpanded(false)}
                className={location.pathname.startsWith("/v2/about") ? "active" : ""}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About 
              </Nav.Link>
            </Nav.Item>

            {/* V2 Insights  */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/v2/insight"
                onClick={() => updateExpanded(false)}
                className={location.pathname.startsWith("/v2/insight") ? "active" : ""}
              >
                <MdInsights style={{ marginBottom: "2px" }} /> Insights
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Dropdown
                show={isOpen}
                onToggle={(isOpen) => setIsOpen(isOpen)}
              >
                <Dropdown.Toggle className="fork-btn-inner" id="dropdown-basic">
                  <TbLanguageHiragana />
                </Dropdown.Toggle>

                <Dropdown.Menu className={`dropdown-menu ${isOpen ? "show-animate" : ""}`}>
                  {languageJson &&
                    languageJson.map((lang, key) => (
                      <Dropdown.Item
                        key={key}
                        as="div"
                      >
                        <Form.Check
                          type="radio"
                          label={lang.name}
                          onChange={() => handleChange(lang)}
                          checked={selectedLang?.value === lang.value}
                          id={`language-${lang}`}
                        />
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
            
            {/* GitHub Portfolio Repo Link */}
            {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/RuthvikMr/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
            */}
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
