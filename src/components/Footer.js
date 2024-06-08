import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FloatButton } from 'antd';
import { useNavigate } from 'react-router-dom';
import config  from '../Assets/json/appConfig.json';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";

function Footer(props) {
  const { name, contact} = props;
  const getIcons = ( name ) =>{
    switch (name.toLowerCase()) {
      case "instagram":
        return <AiFillInstagram />;
      case "twitter":
        return <AiOutlineTwitter />;
      case "linkedin":
        return <FaLinkedinIn />;
      case "github":
        return <AiFillGithub />
      default :
      return <AiFillGithub/>;
    }
  }
  const [currentDate, setCurrentDate] = useState('');
  const navigate = useNavigate();
  const routeTo = () =>{
    navigate('/resume');
  }
  useEffect(() => {
    const date = new Date();
    const formattedDate = `${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3><FaCode/> {name}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3><FaCodeBranch/> {config.version}{currentDate}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {contact && contact.map((data,key)=>(
               <li className="social-icons" key={key}>
               <a
                 href={data.link}
                 style={{ color: "white" }}
                 target="_blank" 
                 rel="noopener noreferrer"
               >
                {getIcons(data.name)}
               </a>
             </li>
            ))}
          </ul>
        </Col>
      </Row>
      <FloatButton style={{background:'purple'}} onClick={routeTo} tooltip={<div>Resume</div>} className="purple" />;
    </Container>
  );
}

export default Footer;
