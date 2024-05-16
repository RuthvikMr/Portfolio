import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MRW from "../../Assets/Projects/mrw.png";
import MrPortfolio from "../../Assets/Projects/mr-portfolio.png";
import teamMaker from "../../Assets/Projects/teamMaker.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <strong className="purple"> Mobile Development </strong>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MRW}
              title="MR Wallet"
              description="An offline app for storing personal information employs encryption techniques and utilizes a password-protected key. It also includes 2-factor authentication, including biometric authentication, and utilizes the Android multi-dex library, along with activity animations."
              demoLink="https://play.google.com/store/apps/details?id=com.ruthvik.wallet&pcampaignid=web_share"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teamMaker}
              title="Cricket Team Maker"
              description="A team developing Java mobile applications. Have divided the teams into halves using Java's built-in randomness methods."
              demoLink="https://play.google.com/store/apps/details?id=com.ruthvik.cricketteamselection&pcampaignid=web_share"
            />
          </Col>
        </Row>
        <strong className="purple"> Web Development </strong>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MrPortfolio}
              title="Portfolio"
              description="A portfolio website which is built using react js and firebase. Have a sections to present the employee details like Bio, Projects, Skills, Resume"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
