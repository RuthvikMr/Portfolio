import React, { useEffect, useState } from "react";
import { DateFormatter } from "../../Util/shared/DateFormatter";
import { config } from "../../Util/config";
import { Col, Row, Card, Button, Spinner, Placeholder } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export function ListNewsV2() {
  const [page, setPage] = useState(1);
  const [newsData, setNewsData] = useState([]);
  const [loader, setLoader] = useState(false);
  const { t } = useTranslation();

  // Fetch news
  const getNewsList = async (nextPage = false) => {
    try {
      setLoader(true);
      const nextPageNumber = nextPage ? page + 1 : 1;
      const response = await fetch(
        `${config.api_url}news?page=${nextPageNumber}`
      );
      if (!response.ok) {
        console.error("Failed to fetch news:", response.statusText);
        return;
      }
      const data = await response.json();
      const articles = data?.articles || [];

      if (nextPage) {
        setNewsData((prevData) => [...prevData, ...articles]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setNewsData(articles);
        setPage(1);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getNewsList();
  }, []);

  // Glassmorphism card style
  const cardStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(8px)",
    borderRadius: "15px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    color: "#fff",
    height: "100%",
    cursor: "pointer",
    overflow: "hidden",
  };

  const sectionStyle = {
    padding: "50px 0",
  };

  return (
    <section style={sectionStyle}>
      <Row style={{ justifyContent: "center", gap: "20px" }}>
        {!loader && newsData?.length > 0 ? (
          <>
            {newsData.map((data, key) => (
              <Col md={3} key={key}>
                <Card
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(168,85,247,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {data?.urlToImage && (
                    <Card.Img
                      variant="top"
                      src={data.urlToImage}
                      style={{
                        height: "180px",
                        objectFit: "cover",
                      }}
                    />
                  )}
                  <Card.Body>
                    <small style={{ opacity: 0.7 }}>
                      <DateFormatter dateString={data?.publishedAt} />
                    </small>
                    <Card.Title style={{ fontSize: "1.1rem", marginTop: "10px" }}>
                      {data?.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}

            {/* Show More Button */}
            <Col xs={12} style={{ textAlign: "center", marginTop: "30px" }}>
              <Button
                onClick={() => getNewsList(true)}
                disabled={loader}
                style={{
                  background: "linear-gradient(to right, #a855f7, #6d28d9)",
                  border: "none",
                  padding: "10px 25px",
                  fontWeight: "500",
                  borderRadius: "30px",
                  boxShadow: "0 0 15px rgba(168,85,247,0.5)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 0 25px rgba(168,85,247,0.8)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 0 15px rgba(168,85,247,0.5)";
                }}
              >
                {loader ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />{" "}
                    &nbsp; {t("messages.loading")}
                  </>
                ) : (
                  t("messages.showMore")
                )}
              </Button>
            </Col>
          </>
        ) : loader ? (
          <Col xs={12} style={{ textAlign: "center" }}>
            <h5 style={{ color: "#a855f7" }}>{t("messages.loading")}</h5>
            <Placeholder animation="glow">
              <Placeholder xs={6} /> <Placeholder xs={8} /> <Placeholder xs={4} />
            </Placeholder>
          </Col>
        ) : (
          <Col xs={12} style={{ textAlign: "center", color: "#fff" }}>
            <h5>{t("messages.noNewsAvailable")}</h5>
          </Col>
        )}
      </Row>
    </section>
  );
}