import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { ListNews } from "./ListNews";
import { useTranslation } from "react-i18next";

function News() {
  const { t } = useTranslation();
    return (
        <Container fluid className="news-section">
        <Particle />
        <Container>
        <h1 className="project-heading"
          dangerouslySetInnerHTML={{
            __html: t("news.heading1"),
          }}>
          {/* Tech <strong className="purple"> News</strong> */}
        </h1>
        <ListNews/>
        </Container>
        </Container>
      );
}

export default News;