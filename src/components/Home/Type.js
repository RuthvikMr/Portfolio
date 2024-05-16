import React from "react";
import Typewriter from "typewriter-effect";

function Type(props) {
  const {typeWriter} = props;
  return (
    <Typewriter
      options={{
        strings: typeWriter,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
