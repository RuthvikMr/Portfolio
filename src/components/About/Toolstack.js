import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiFirebase,
  SiWindows11,
} from "react-icons/si";

function Toolstack(props) {
  const { toolStack }= props;
  const getIcons = (name) =>{
    switch (name.toLowerCase()) {
      case "windows":
        return <SiWindows11 />;
      case "vscode":
        return <SiVisualstudiocode />
      case "postman":
        return <SiPostman />;
      case "git":
        return <DiGit />;
      case "firebase":
        return <SiFirebase />;
      default:
        return <SiVisualstudiocode />
    }
  }
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolStack && toolStack.map((data,key)=>(
      <Col xs={4} md={2} className="tech-icons" key={key}>
        {getIcons(data.name)}<br/>
        <h5>{data.name}</h5>
      </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
