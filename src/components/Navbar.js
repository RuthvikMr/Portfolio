import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { TbLanguageHiragana } from "react-icons/tb";
import Form from 'react-bootstrap/Form';
import  languageJson  from '../Assets/json/languages.json'
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null);

  const handleChange = (lang) => {
    setSelectedLang(lang);
    updateLanguage(lang);
  };

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
      console.log("EVENT NAV BAR",event);
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
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/news"
                onClick={() => updateExpanded(false)}
              >
                <FaRegNewspaper
                  style={{ marginBottom: "2px" }}
                />{" "}
                News
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Dropdown>
                <Dropdown.Toggle className="fork-btn-inner" id="dropdown-basic">
                <TbLanguageHiragana />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  { languageJson && languageJson.map((lang,key) => (
                  <Dropdown.Item key={key} as="div">
                      <Form.Check
                        type="radio"

                        label={lang.name}
                        checked={selectedLang?.name === lang.name}
                        onChange={()=> handleChange(lang)}
                        onClick={(event) => 
                          event.stopPropagation()
                        }
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
