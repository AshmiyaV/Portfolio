'use client';
import React, { useState } from 'react';
import styles from "./SkillsList.module.scss";
import { FaJava, FaPython, FaNodeJs, FaAws, FaGithub, FaAngular, FaRProject } from "react-icons/fa";
import { DiMongodb, DiPostgresql, DiMysql, DiJenkins } from "react-icons/di";
import { SiReact, SiSpringboot, SiBootstrap, SiExpress, 
         SiRedux, SiGradle, SiApachejmeter, SiHibernate, SiTerraform, 
         SiGooglecloud, SiMicrosoftazure, SiIbmcloud, SiOracle, 
         SiNumpy, SiPandas } from "react-icons/si";
import { TbBrandJavascript, TbBrandHtml5, TbBrandTypescript } from "react-icons/tb";
import { VscTerminalCmd } from "react-icons/vsc";

export default function SkillCard({id}) {
  const [activeTitle, setActiveTitle] = useState(null);

  const handleIconInteraction = (title) => {
    setActiveTitle(activeTitle === title ? null : title);
  };

  const skillsData = {
    languages: [
      { icon: <FaJava className={styles.techLogo}/>, title: 'Java' },
      { icon: <FaPython className={styles.techLogo}/>, title: 'Python' },
      { icon: <TbBrandHtml5 className={styles.techLogo}/>, title: 'HTML 5' },
      { icon: <TbBrandJavascript className={styles.techLogo}/>, title: 'JavaScript' },
      { icon: <TbBrandTypescript className={styles.techLogo}/>, title: 'TypeScript' },
      { icon: <VscTerminalCmd className={styles.techLogo}/>, title: 'Unix Commands' },
      { icon: <SiTerraform className={styles.techLogo}/>, title: 'Terraform' },
      { icon: <FaRProject className={styles.techLogo}/>, title: 'R' }
    ],
    frameworks: [
      { icon: <SiSpringboot className={styles.techLogo}/>, title: 'Spring Boot' },
      { icon: <SiReact className={styles.techLogo}/>, title: 'ReactJS' },
      { icon: <FaAngular className={styles.techLogo}/>, title: 'Angular' },
      { icon: <SiBootstrap className={styles.techLogo}/>, title: 'Bootstrap' },
      { icon: <FaNodeJs className={styles.techLogo}/>, title: 'Node.js' },
      { icon: <SiExpress className={styles.techLogo}/>, title: 'Express.js' }
    ],
    libraries: [
      { icon: <SiRedux className={styles.techLogo}/>, title: 'Redux' },
      { icon: <SiGradle className={styles.techLogo}/>, title: 'Gradle' },
      { icon: <SiApachejmeter className={styles.techLogo}/>, title: 'JUnit' },
      { icon: <SiHibernate className={styles.techLogo}/>, title: 'Hibernate' },
      { icon: <SiNumpy className={styles.techLogo}/>, title: 'NumPy' },
      { icon: <SiPandas className={styles.techLogo}/>, title: 'Pandas' }
    ],
    databases: [
      { icon: <SiOracle className={styles.techLogo}/>, title: 'Oracle SQL' },
      { icon: <DiPostgresql className={styles.techLogo}/>, title: 'PostgreSQL' },
      { icon: <DiMysql className={styles.techLogo}/>, title: 'MySQL' },
      { icon: <DiMongodb className={styles.techLogo}/>, title: 'MongoDB' }
    ],
    cloudDevOps: [
      { icon: <SiGooglecloud className={styles.techLogo}/>, title: 'Google Cloud Platform' },
      { icon: <FaAws className={styles.techLogo}/>, title: 'Amazon Web Services' },
      { icon: <SiMicrosoftazure className={styles.techLogo}/>, title: 'Microsoft Azure' },
      { icon: <SiIbmcloud className={styles.techLogo}/>, title: 'IBM Cloud' },
      { icon: <FaGithub className={styles.techLogo}/>, title: 'Github Actions' },
      { icon: <DiJenkins className={styles.techLogo}/>, title: 'Jenkins' }
    ]
  };

  const SkillSection = ({ title, skills }) => (
    <div className={styles.skillBox}>
      <h2>{title}</h2>
      <div className={styles.skillset}>
        {skills.map((skill, index) => (
          <div 
            key={index}
            className={styles.skillIconWrapper}
            onClick={() => handleIconInteraction(skill.title)}
            onMouseEnter={() => handleIconInteraction(skill.title)}
            onMouseLeave={() => handleIconInteraction(null)}
          >
            {skill.icon}
            <span className={`${styles.skillTitle} ${activeTitle === skill.title ? styles.active : ''}`}>
              {skill.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.skillContainer} id={id}>
      {/* <div className={styles.skillHeader}>My Skills</div> */}
      <SkillSection title="Languages" skills={skillsData.languages} />
      <SkillSection title="Frameworks" skills={skillsData.frameworks} />
      <SkillSection title="Libraries" skills={skillsData.libraries} />
      <SkillSection title="Databases" skills={skillsData.databases} />
      <SkillSection title="Cloud & DevOps" skills={skillsData.cloudDevOps} />
    </div>
  );
}
