import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { useTranslation } from "react-i18next";

function Home(props) {
  const { name,passing_message,contact,workExp }= props;
  const { t } = useTranslation();
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              {t('homePage.introMessage1')}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
              {t('homePage.introMessage2')} {' '}
                <strong className="main-name" style={{textTransform:"uppercase"}}>{name}</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type typeWriter={passing_message} />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 contact={contact} workExp={workExp}/>
    </section>
  );
}

export default Home;
