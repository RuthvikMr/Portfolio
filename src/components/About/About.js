import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import aboutSvg from "../../Assets/icons/about.svg";
import Toolstack from "./Toolstack";
import { useTranslation } from "react-i18next";
import { Bounce, Zoom } from "react-awesome-reveal";

function About(props) {
  const { tools,skills,name,address, designation,company ,qualification,college,hobby,education } = props;
  const { t } = useTranslation();
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Zoom triggerOnce='true'>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}
             dangerouslySetInnerHTML={{
              __html: t("about.heading1"),
            }}>
              {/* Know About <strong className="purple">Me</strong> */}
            </h1>
            </Zoom>
            <Bounce triggerOnce='true' delay={1000}>
            <Aboutcard
            name={name}
            address={address}
            designation={designation}
            company={company}
            qualification={qualification}
            college={college}
            hobby={hobby}
            education={education}
            />
            </Bounce>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={aboutSvg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <Zoom triggerOnce='true'>
        <h1 className="project-heading"
          dangerouslySetInnerHTML={{
            __html: t("about.heading2"),
          }}>
          {/* Professional <strong className="purple">Skillset </strong> */}
        </h1>
        </Zoom>

        <Techstack techStack={skills} />

        <Zoom triggerOnce='true'>
        <h1 className="project-heading"
         dangerouslySetInnerHTML={{
          __html: t("about.heading3"),
        }}>
          {/* <strong className="purple">Tools</strong> I use */}
        </h1>
        </Zoom>

        <Toolstack toolStack={tools}/>

      </Container>
    </Container>
  );
}

export default About;
