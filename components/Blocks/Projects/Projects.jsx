'use client'
import React, { useState } from 'react';
import styles from "./Projects.module.scss";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Blobs from "@/components/UI/Elements/Blobs/Blobs";
import Title from '@/components/UI/Elements/Title/Title';

export default function Projects(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOnClick = (projectLink) => {
    window.open(`${projectLink}`);
  }
  const Projects = [
    {
        projectTitle: "locALL",
            projectDesc: "A community-focused web platform that connects people with local events, marketplace activities, and community support services based on their location. The platform enables users to organize events, buy/sell items, share excess food, coordinate donations, and stay updated with local happenings and weather conditions, all within their specific zip code area.",
            projectLink: "https://github.com/AshmiyaV/loc-all",
            blobTypeForProject: "v1",
            blobType: "blobV1"
    },
    {
        projectTitle: "CloudNotifyOps",
            projectDesc: "A serverless architecture on Google Cloud Platform that automates real-time notifications and database operations using Cloud Functions and Pub/Sub. The project implements Infrastructure as Code with Terraform and includes CI/CD through GitHub Actions, making it a comprehensive solution for managing cloud-based notification systems and operational tasks.",
            projectLink: "https://github.com/AshmiyaV/CloudGuard",
            blobTypeForProject: "v2",
            blobType: "blobV2"
    }
  ]

  return (
    <section className={styles.mainDiv} id="projects">
           <Title><span>Projects</span></Title>
        {Projects.map((project, index) => (
    <div key={index} className={styles.projectWindow} id={index}>
              <Blobs type={project.blobTypeForProject} classVariable={`${styles.blob} ${styles[project.blobType]}`}/>
      <div className={`${styles.projectWrapper} ${project.className || ''} ${isExpanded ? styles.expanded : ''}`}>
        <div className={styles.aboutProject}>
          <div className={styles.projectHeader}>
            <h2 className={styles.projectTitle}>{project.projectTitle}</h2>
            <button 
              className={`${styles.expandToggle} ${isExpanded ? styles.expanded : ''}`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <FaChevronDown />
            </button>
          </div>
          <div className={styles.projectContent}>
            <div className={styles.projectPreview}>
              {project.shortDesc || project.projectDesc.substring(0, 100) + '...'}
            </div>
            <div className={styles.projectFull}>
              {project.projectDesc}
            </div>
          </div>
          <button className={styles.btn} onClick={() => handleOnClick(project.projectLink)}>
            <span>View on GitHub</span>
            <FiGithub className={styles.social} size={20}/>
            <FaArrowRight className={styles.btnArrow} size={22}/>
          </button>
        </div>
      </div>
    </div>
    ))}
    </section>
  );
}
