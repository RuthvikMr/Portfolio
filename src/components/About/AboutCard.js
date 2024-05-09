import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ruthvik M R </span>
            from <span className="purple"> Mysuru, India.</span>
            <br />
            I am currently working as a software developer at Knowledge Lens: A Rockwell Automation Company.
            <br />
            I have completed my master of computer application (MCA) at Amrita Vishwa Vidyapeetham,
            Mysuru campus.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build meaningful contributions to the world!"{" "}
          </p>
          <footer className="blockquote-footer">Ruthvik M R</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
