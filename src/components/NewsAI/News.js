import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { ListNews } from "./ListNews";

function News() {
    return (
        <Container fluid className="news-section">
        <Particle />
        <Container>
        <h1 className="project-heading">
          Tech <strong className="purple"> News</strong>
        </h1>
        <ListNews/>
        </Container>
        </Container>
      );
}

export default News;