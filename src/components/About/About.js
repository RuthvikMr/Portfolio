import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { useTranslation } from 'react-i18next';

function About(props) {
  const { tools,skills,name,address, designation,company ,qualification,college,hobby } = props;
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change language dynamically
  };
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Button
          variant="primary"
          onClick={() => changeLanguage('en') } // Fetch next page
        >English</Button>
        <Button
          variant="primary"
          onClick={() => changeLanguage('fr') } // Fetch next page
        >Français</Button>
             <h1>{t('welcome')}</h1>
      <p>{t('greeting', { name: 'John' })}</p>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard
            name={name}
            address={address}
            designation={designation}
            company={company}
            educaton={qualification}
            college={college}
            hobby={hobby}
            />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack techStack={skills} />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack toolStack={tools}/>

      </Container>
    </Container>
  );
}

export default About;
