import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import contactSvg from "../../Assets/contact.svg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Zoom } from "react-awesome-reveal";
import Tilt from "react-parallax-tilt";

import Contact from "../Contact/Contact";
import { useNavigate } from "react-router-dom";

function Home2(props) {
  const { contact, workExp} = props;
  const navigate = useNavigate();
  const { t } = useTranslation();
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
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={4} className="myAvtar">
          <Tilt>
              <img src={homeLogo} className="img-fluid" alt="home pic" />
          </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <Zoom triggerOnce='true'>
            <h1 style={{ fontSize: "2.6em" }}
             dangerouslySetInnerHTML={{
              __html: t("homePage.introMessage3"),
            }}></h1>
            </Zoom>
            <p className="home-about-body">
              Software engineer with {workExp} years of experience.
              <br/>
              Passionate to work on technically challening projects
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="highlight-text">Web Applications and Products </b> and
                also in areas related to{" "}
                <b className="highlight-text">
                  Devops.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing <b className="highlight-text">Mobile Applications </b>
              with
              <i>
                <b className="highlight-text">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
              <b className="highlight-text"> React.js and Ionic</b>
              <br/>
              <b className="purple"><a onClick={() => navigate('/about')}>Know More...</a></b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="home-about-social">
          <Zoom triggerOnce='true'>
            <h1 dangerouslySetInnerHTML={{
              __html: t("homePage.ConnectWithMe"),
            }}></h1>
            </Zoom>
            <Zoom triggerOnce='true' delay={1000}>
            <p dangerouslySetInnerHTML={{
              __html: t("messages.feelFreeMsg"),
            }}>
              {/* Feel free to <span className="purple">connect </span>with me */}
            </p>
            </Zoom>
            <Contact/>
            <ul className="home-about-social-links">
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
          <Col md={8} className="home-about-description">
              <img src={contactSvg} className="img-fluid" style={{width:'60%'}} alt="avatar" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
