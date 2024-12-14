import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MRW from "../../Assets/Projects/mrw.png";
import MrPortfolio from "../../Assets/Projects/mr-portfolio.png";
import teamMaker from "../../Assets/Projects/teamMaker.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading"
        dangerouslySetInnerHTML={{
              __html: t("projects.heading1", {
                purple: (chunk) => `<span className="purple">${chunk}</span>`,
              }),
            }}>
          {/* My Recent <strong className="purple">Works </strong> */}
        </h1>
        <p style={{ color: "white" }}>
          {t('projects.heading2')}
        </p>
        <strong className="highlight-text"> Mobile Development </strong>
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
        <strong className="highlight-text"> Web Development </strong>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MrPortfolio}
              title="Portfolio"
              description="A Json driven portfolio website which is built using react js and firebase. It has a sections to present the user details like Bio, Projects, Skills, Resume with one single json file."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
