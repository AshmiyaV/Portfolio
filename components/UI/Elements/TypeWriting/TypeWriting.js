import React from "react";
import Typewriter from "typewriter-effect";
import styles from './TypeWriting.module.scss';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "FullStack Developer",
          "Frontend Developer",
          "Backend Developer",
          "Database Developer",
          "Cloud Engineer",
          "DevOps Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        cursor: '|'
      }}
    />
  );
}
export default Type;