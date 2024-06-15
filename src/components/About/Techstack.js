import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import {
  SiAngular,
} from "react-icons/si";

function Techstack(props) {
  const { techStack } = props;
  const getIcons = (name) =>{
    switch (name.toLowerCase()) {
      case "Javascript":
        return <DiJavascript1 />;
      case "angular":
        return <SiAngular />
      case "react":
        return <DiReact />;
      case "mongo":
        return <DiMongodb />;
      case "node":
        return <DiNodejs />;
      default:
        return <DiJavascript1 />
    }
  }
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     {techStack && techStack.map((data,key)=>(
       <Col xs={4} md={2} className="tech-icons" key={key}>
        {getIcons(data.name)}
        <br/>
       <h5>{data.name}</h5>
     </Col>
     ))}
    </Row>
  );
}

export default Techstack;
