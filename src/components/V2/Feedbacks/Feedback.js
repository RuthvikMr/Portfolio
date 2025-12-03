import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Typography } from "antd";
import { Slide, Zoom } from "react-awesome-reveal";
import './Feedback.css';

export default function Feedback() {
    const { Title, Paragraph } = Typography;
    const [expandedCards, setExpandedCards] = useState({});
    
    const feedbackList = [
        {
            id: 1,
            name: "Irfan Rayachuru",
            role: "SR. Team Lead @Rockwell Automation",
            type: "Manager",
            feedback: "For his outstanding contributions to PPM v2.01 frontend deliverables, where proactive identification and resolution of edge cases ensured readiness and stability ahead of the release. These efforts played a key role in setting the stage for a smooth and reliable launch.",
            date: "September 12, 2025"
        },
        {
            id: 2,
            name: "Noureen Taj",
            role: "Product Owner @Rockwell Automation",
            type: "Lead",
            feedback: "His strong adaptability and openness to change, enabling effective handling of new challenges in dynamic work environments. His flexibility continues to drive consistent performance improvement and visible professional growth.",
            date: "July 19, 2024"
        }
    ];

    const MAX_LENGTH = 150;

    const toggleExpand = (id) => {
        setExpandedCards(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const getTruncatedText = (text, id) => {
        if (text.length <= MAX_LENGTH || expandedCards[id]) {
            return text;
        }
        return text.substring(0, MAX_LENGTH) + "...";
    };

    return (
        <section style={{
            color: "#fff",
            padding: "60px 0",
            minHeight: "100vh"
        }}>
            <Container>
                <Zoom triggerOnce>
                    <Title
                        className="text-center fw-bold mb-4"
                        style={{
                            background: "linear-gradient(to right, #a855f7, #6366f1)",
                            WebkitBackgroundClip: "text",
                            fontSize: "2.5rem",
                            fontWeight: "800",
                            fontFamily: "'Poppins', sans-serif",
                            color: "transparent",
                        }}
                    >
                        My Impact in Words
                    </Title>
                    <Paragraph className="text-center" style={{ fontSize: "1.1rem", color: "#c4c4c4", marginBottom: "3rem" }}>
                        Feedback from industry leaders on the impact of my work in their organizations.
                    </Paragraph>
                </Zoom>

                {/* Feedback List */}
                <Row className="g-3">
                    {feedbackList && feedbackList.map((item, index) => (
                        <Col lg={6} className="mb-3" key={item.id}>
                            <Slide direction={index % 2 === 0 ? "left" : "right"} triggerOnce>
                                <Card className="feedback-card">
                                    <Card.Body>
                                        <div className="feedback-quote-mark">"</div>
                                        <p className="feedback-message">
                                            {getTruncatedText(item.feedback, item.id)}
                                        </p>
                                        {item.feedback.length > MAX_LENGTH && (
                                            <Button 
                                                variant="link" 
                                                className="feedback-read-more"
                                                onClick={() => toggleExpand(item.id)}
                                            >
                                                {expandedCards[item.id] ? "Show Less" : "Read More"}
                                            </Button>
                                        )}
                                        <div className="feedback-author-section">
                                            <div className="feedback-author-info">
                                                <h5 className="feedback-name">
                                                    {item.name}
                                                </h5>
                                                <p className="feedback-role">
                                                    {item.role}
                                                </p>
                                                <div className="feedback-meta">
                                                    <span className={`feedback-badge ${item.type.toLowerCase()}`}>
                                                        {item.type}
                                                    </span>
                                                    <span className="feedback-separator">•</span>
                                                    <span className="feedback-date">{item.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Slide>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
