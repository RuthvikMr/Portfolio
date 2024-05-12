import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FloatButton } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const [currentDate, setCurrentDate] = useState('');
  const navigate = useNavigate();
  const routeTo = () =>{
    navigate('/resume');
  }
  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Last Updated: {currentDate}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Developed: Ruthvik M R</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/RuthvikMr"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/RuthvikMR1/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/RuthvikMr/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/ruthvikmr417/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <FloatButton style={{background:'purple'}} onClick={routeTo} tooltip={<div>Resume</div>} className="purple" />;
    </Container>
  );
}

export default Footer;
