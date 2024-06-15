import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard(props) {
  const { name , address, designation, company, qualification , college,hobby} = props;
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="highlight-text"> {name} </span>
            from {address}
            <br />
            I am currently working as a {designation} at {company}.
            <br />
            I have completed my {qualification} at {college}.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            {hobby && hobby.map((data,key) => (
               <li className="about-activity" key={key}>
               <ImPointRight /> {data}
             </li>
            ))}
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build meaningful contributions to the world!"{" "}
          </p>
          <footer className="blockquote-footer">{name}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
