import React from "react";
import { Container, Row, Col, Badge, Button, Card } from "react-bootstrap";
import laptopImg from "../../../Assets/about.png";
import { useTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import Particle from "../../Particle";
import { Timeline, Typography } from "antd";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { TiTickOutline } from "react-icons/ti";
import { MdOutlineWorkHistory } from "react-icons/md";
import './About.css'

function AboutV2(props) {
    const { Title} = Typography;
    const navigate = useNavigate();

    const educationData = [
        {
            year: "2022 - Present",
            degree: "Rockwell Automation Company",
            school: "Associate Software Engineer II",
            icon: <MdOutlineWorkHistory />,
            desc: "Electronic City Phase I",
        },
        {
            year: "2017 - 2022",
            degree: "Amrita Vishwa Vidyapeetham",
            school: "BCA - MCA",
            icon: <TiTickOutline />,
            desc: "Score: 6.9 CGPA",
        },
        {
            year: "2015 - 2017",
            degree: "Sankalpa PU College",
            school: "11th & 12th",
            icon: <TiTickOutline />,
            desc: "Score: 71.16%",
        },
        {
            year: "2015",
            degree: "S.T Thomas High School",
            school: "10th",
            icon: <TiTickOutline />,
            desc: "Score: 77.60%",
        },
    ];

    return (
        <section
            style={{
                background: "linear-gradient(180deg, #0f0c29, #302b63, #24243e)",
                color: "#fff",
                padding: "60px 0",
            }}
            className="mt-4"
        >
            <Container fluid>
                <Particle />
                <Title
                    className="text-center"
                    style={{
                        fontSize: "2.5rem",
                        fontWeight: "800",
                        fontFamily: "'Poppins', sans-serif",
                        background: "linear-gradient(to right, #a855f7, #6366f1)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        marginBottom: "0px",
                    }}
                >
                    Know About Me
                </Title>
                <p
                    className="text-center text-light mb-5"
                    style={{
                        opacity: 0.85,
                        fontSize: "1.15rem",
                        maxWidth: "700px",
                        margin: "0 auto",
                    }}
                >
                    Explore the chapters of my education and work experience, each shaping my path of growth and knowledge.
                </p>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingBottom: "50px",
                        }}
                    >
                        <Slide direction="left" triggerOnce='true'>
                            <Title
                                className="text-start"
                                style={{
                                    fontSize: "2.5rem",
                                    fontWeight: "800",
                                    fontFamily: "'Poppins', sans-serif",
                                    WebkitBackgroundClip: "text",
                                    color: "white",
                                    marginBottom: "0px",
                                }}
                            >
                                Hey, I'm
                            </Title>
                            <Title
                                className="text-start"
                                style={{
                                    fontSize: "2.5rem",
                                    fontWeight: "800",
                                    fontFamily: "'Poppins', sans-serif",
                                    background: "linear-gradient(to right, #a855f7, #6366f1)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                    marginBottom: "0px",
                                }}
                            >
                                Ruthvik M R
                            </Title>
                        </Slide>

                        <Slide direction="up" triggerOnce='true' delay={1000}>
                            <p
                                className="text-start text-light mb-5"
                                style={{
                                    fontSize: "1.15rem",
                                    maxWidth: "700px",
                                    margin: "0 auto",
                                }}
                            >
                                I'm a frontend developer with 3.5 years of professional experience building
                                interactive and responsive web applications. Skilled in Angular and React.
                                During my college days, I also explored Android development, building
                                a few exciting projects that strengthened my foundation in mobile app development.
                                My focus is on creating seamless user experiences with clean, maintainable code.
                                Beyond coding, I’m passionate about design systems, performance optimization,
                                and interested in learning the emerging technologies like &nbsp;
                                <Badge pill bg="info">
                                    Micro Frontends
                                </Badge>,&nbsp;
                                <Badge pill bg="info">
                                    GraphQL
                                </Badge>,
                                <Badge pill bg="info">
                                    Next.js
                                </Badge>,&nbsp;
                                <Badge pill bg="info">
                                    AI & ML
                                </Badge>
                            </p>
                        </Slide>
                        <Button
                            onClick={() => navigate('/resume')}
                            style={{
                                background: "linear-gradient(to right, #a855f7, #6d28d9)",
                                border: "none",
                                padding: "10px 25px",
                                fontWeight: "500",
                                display: 'flex',
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
                            <FiEye className="mt-1" />
                            &nbsp;  View Resume
                        </Button>
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img src={laptopImg} alt="about" className="img-fluid" />
                    </Col>
                </Row>
                <Title
                    className="text-center"
                    style={{
                        fontSize: "2.5rem",
                        fontWeight: "800",
                        fontFamily: "'Poppins', sans-serif",
                        background: "linear-gradient(to right, #a855f7, #6366f1)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        marginBottom: "0px",
                    }}
                >
                    My Journey Tree
                </Title>

                <Timeline
                    mode="alternate"
                    className="p-5 timeline-section"
                    items={educationData.map((item, index) => ({
                        dot: item.icon,
                        children: (
                            <Slide direction={index % 2 === 0 ? "left" : "right"} triggerOnce>
                                <Card
                                    key={index}
                                    className="shadow-lg border-0 p-4 timeline-card"
                                    style={{
                                        borderRadius: "20px",
                                        background: "rgba(255, 255, 255, 0.05)",
                                        backdropFilter: "blur(10px)",
                                    }}
                                >
                                    <Card.Body>
                                        <Title
                                            style={{
                                                fontSize: "1.3rem",
                                                fontWeight: "800",
                                                fontFamily: "'Poppins', sans-serif",
                                                background: "linear-gradient(to right, #a855f7, #6366f1)",
                                                WebkitBackgroundClip: "text",
                                                color: "transparent",
                                                marginBottom: "0px",
                                            }}
                                        >
                                            {item.degree}
                                        </Title>
                                        <p style={{ color: "#d1d5db", fontSize: "1.1rem" }}>{item.year}</p>
                                        <Card.Text style={{ fontSize: "1.1rem", color: "#fff" }}>
                                            {item.school}
                                            <br />
                                            {item.desc}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Slide>
                        ),
                    }))}
                ></Timeline>

            </Container>
        </section>
    );
}

export default AboutV2;
