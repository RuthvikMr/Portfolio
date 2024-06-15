import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2(props) {
  const { contact, workExp} = props;
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
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A BRIEF<span className="purple"> INTRODUCTION </span>ABOUT MYSELF
            </h1>
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
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
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
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
