/* V2 */
import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import myImg from "../../../Assets/avatar.svg";
import Particle from "../../Particle";
import Type from "../../Home/Type";
import { useTranslation } from "react-i18next";
import Tilt from "react-parallax-tilt";
import './Home.css';
import { Typography } from "antd";
import Workfolio from "../Works/Work";
import { Slide, Zoom } from "react-awesome-reveal";
import contactSvg from "../../../Assets/contact.svg";
import Contact from "../Contact/Contact.js";
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


export default function HomeV2(){
      const { t } = useTranslation();
      const { Title} = Typography;
      const badgeSkills = ['Javascript','Angular','React JS','Ionic'];
    const getIcons = (name) => {
        switch (name.toLowerCase()) {
            case "instagram":
                return <AiFillInstagram />;
            case "twitter":
                return <AiOutlineTwitter />;
            case "linkedin":
                return <FaLinkedinIn />;
            case "github":
                return <AiFillGithub />
            default:
                return <AiFillGithub />;
        }
    }
    const contact = [
        {
            "link": "https://www.instagram.com/ruthvikmr417/",
            "name": "Instagram"
        },
        {
            "link": "https://twitter.com/RuthvikMR1/",
            "name": "Twitter"
        },
        {
            "link": "https://www.linkedin.com/in/RuthvikMr/",
            "name": "LinkedIn"
        },
        {
            "link": "https://github.com/RuthvikMr/",
            "name": "Github"
        }
    ]
    
    return (
        <section style={{
            background: "linear-gradient(180deg, #0f0c29, #302b63, #24243e)",
            color: "#fff",
            padding: "60px 0",
        }}>
            <Container id="home">
                <Particle />
                <Container className="home-content">
                    <Row style={{padding:'60px 0'}}>
                        <Col md={7} className="home-header">
                        <Slide triggerOnce>
                           <Title
                                className="text-start"
                                style={{
                                    textTransform: "uppercase",
                                    fontSize: "1.5rem",
                                    fontWeight: "800",
                                    fontFamily: "'Poppins', sans-serif",
                                    WebkitBackgroundClip: "text",
                                    color: "white",
                                    marginBottom: "0px",
                                }}
                            >
                                I'm Ruthvik M R
                            </Title>
                        </Slide>
                        <Slide triggerOnce delay={500}>
                             <Title
                                className="text-start mt-0"
                                style={{
                                    textTransform: "uppercase",
                                    fontSize: "3.5rem",
                                    fontWeight: "800",
                                    fontFamily: "'Poppins', sans-serif",
                                    WebkitBackgroundClip: "text",
                                    color: "white",
                                    marginBottom: "0px",
                                }}
                            >
                                Frontend
                            </Title>
                            <Title
                                className="text-start mt-0"
                                style={{
                                    textTransform: "uppercase",
                                    fontSize: "3.5rem",
                                    fontWeight: "800",
                                    fontFamily: "'Poppins', sans-serif",
                                    WebkitBackgroundClip: "text",
                                    color: "#a855f7",
                                    marginBottom: "0px",
                                }}
                            >
                                Developer
                            </Title>
                        </Slide>
                            <Type typeWriter={['3.5 Years of Experience at','Rockwell Automation']} />
                            <div>
                                <Row>
                                    {badgeSkills && badgeSkills.length > 0 && badgeSkills.map((item, i) => (
                                        <Col className="col-auto" key={i}>
                                            <Slide direction={i % 2 === 0 ? "up" : "down"} triggerOnce>
                                                <Badge pill bg="info" tabIndex={i} id={'badgeSkill' + i}>
                                                    {item}
                                                </Badge>&nbsp;&nbsp;
                                            </Slide>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }} className="myAnimeAvtar">
                            <Tilt className="d-flex justify-content-center">
                                <img
                                    src={myImg}
                                    alt="Avatar pic"
                                    className="img-fluid"
                                    style={{ maxHeight: "450px" }}
                                />
                            </Tilt>
                        </Col>
                    </Row>
                    <Row>
                        <Workfolio />
                    </Row>
                    <Row>
                        <Col md={4} className="home-about-social">
                            <Zoom triggerOnce='true'>
                                <h2
                                    className="text-center fw-bold mb-3 mt-3"
                                    style={{
                                        background: "linear-gradient(to right, #a855f7, #6366f1)",
                                        WebkitBackgroundClip: "text",
                                        fontSize: "2.5rem",
                                        fontWeight: "800",
                                        fontFamily: "'Poppins', sans-serif",
                                        color: "transparent",
                                    }}
                                >
                                    Connect With Me
                                </h2>
                            </Zoom>
                            <Zoom triggerOnce='true' delay={1000}>
                                <p dangerouslySetInnerHTML={{
                                    __html: t("messages.feelFreeMsg"),
                                }}>
                                    {/* Feel free to <span className="purple">connect </span>with me */}
                                </p>
                            </Zoom>
                            <Contact />
                            <ul className="home-about-social-links">
                                {contact && contact.map((data, key) => (
                                    <li className="social-icons" key={key}>
                                        <a
                                            href={data.link}
                                            style={{ color: "white" }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {getIcons(data.name)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col md={8} className="home-about-description">
                            <img src={contactSvg} className="img-fluid" style={{ width: '60%' }} alt="avatar" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}