'use client'
import React, { useState } from 'react';
import styles from "./Projects.module.scss";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function Projects(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOnClick = () => {
    window.open(`${props.projectLink}`);
  }

  return (
    <div className={styles.projectWindow} id={props.id}>
      <div className={`${styles.projectWrapper} ${props.className || ''} ${isExpanded ? styles.expanded : ''}`}>
        <div className={styles.aboutProject}>
          <div className={styles.projectHeader}>
            <h2 className={styles.projectTitle}>{props.projectTitle}</h2>
            <button 
              className={`${styles.expandToggle} ${isExpanded ? styles.expanded : ''}`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <FaChevronDown />
            </button>
          </div>
          <div className={styles.projectContent}>
            <div className={styles.projectPreview}>
              {props.shortDesc || props.projectDesc.substring(0, 100) + '...'}
            </div>
            <div className={styles.projectFull}>
              {props.projectDesc}
            </div>
          </div>
          <button className={styles.btn} onClick={handleOnClick}>
            <span>View on GitHub</span>
            <FiGithub className={styles.social} size={20}/>
            <FaArrowRight className={styles.btnArrow} size={22}/>
          </button>
        </div>
      </div>
    </div>
  );
}
