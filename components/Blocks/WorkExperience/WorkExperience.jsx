'use client'
import React, { useState } from 'react';
import styles from './WorkExperience.module.scss';
import { FaChevronDown, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import Title from '@/components/UI/Elements/Title/Title';
import Blobs from "@/components/UI/Elements/Blobs/Blobs";

function WorkExperience() {
  const [activeItem, setActiveItem] = useState(null);

  const timelineData = [
    {
      id: 1,
      year: "Sept 2023 - Present",
      title: "Masters in Software Engineering",
      institution: "Northeastern University",
      description: "• Core coursework in Object-Oriented Design and Program Structure & Algorithms\n" +
        "• Advanced studies in Web Design, UX Engineering, and Cloud Computing\n" +
        "• Specialized in Data Science Engineering and Database Management\n" +
        "• Hands-on experience with modern software development methodologies",
      type: "education"
    },
    {
      id: 2,
      year: "Sept 2024 - Present",
      title: "Graduate Teaching Assistant",
      institution: "Northeastern University",
      description: "• Assisted students in mastering concepts related to HTML, CSS, REST, HTTP, SASS, MERN stack, Agile methodologies, and Domain-Driven Design as part of the 'Web Design and User Experience Engineering' course\n" +
        "• Guided students in implementing responsive designs, debugging code, and understanding user-centric design principles\n" +
        "• Supported the application of Agile practices and Domain-Driven Design techniques in project development\n" +
        "• Provided mentorship during coding assignments, facilitated lab sessions, and ensured adherence to best practices in modern web development\n" +
        "• Collaborated with the professor to develop course materials and evaluate project submissions",
      type: "education"
    },
    {
        id: 3,
        year: "Jan 2024 - Sept 2024",
        title: "Web Application Developer",
        institution: "Northeastern University",
        description: "• Designed and built a website for the SAMHSA intervention project, enabling the administration of various surveylevels with results dynamically displayed based on answers provided\n" +
          "• Devised insightful dashboards and reports using React and Python by identifying trends for data visualization and successfully deployed the project on AWS",
        type: "work"
      },
    {
      id: 4,
      year: "Sept 2020 - Aug 2023",
      title: "Full Stack Developer",
      institution: "Standard Chartered Bank",
      description: "• Developed over 50 webpages from scratch encompassing Front-End, Back-End, API Integration and Testing, worked on over 300 Jira and ADO issues within an Agile (Scrum/Kanban) environment\n" +
        "• Spearheaded on the Bank UI project, leveraging Storybook to architect a comprehensive library of reusable components with flexible properties thereby decreasing code duplication by 70%\n" +
        "• Engineered a cutting-edge questionnaire framework in React, leading to an astounding 95% reduction in code rewrites for the development of new applications\n" +
        "• Created user-friendly tools to reckon team indices, performed data manipulation using JavaScript for showcasing it in dashboards using recharts, consequently increasing monthly visitors to about 42.7K\n" +
        "• Integrated Jira and Clarity data for computing predictability, stability, velocity and say/do ratio of squads and developed metrics thereby helping teams to increase efficiency by 85%\n" +
        "• Employed Redux to manage application state, ensuring efficient data flow, centralized state management, and seamless integration between components in the front-end development process\n" +
        "• Orchestrated the development of over 200 test cases for user interfaces, adhering rigorously to SonarQube's stringent quality standards, resulting in robust and reliable software excelling in performance",
      type: "work"
    },
    {
      id: 5,
      year: "Aug 2016 - April 2020",
      title: "Bachelor of Engineering",
      institution: "College of Engineering Guindy, Anna University",
      description: "• Secured top grades in Data Structures and Object-Oriented Programming and Data Structures & Algorithms\n" +
        "• Completed practical training in OOP Lab with hands-on Java programming\n" +
        "• Developed strong foundation in programming alongside electronics expertise",
      type: "education"
    }
  ];

  return (
  <section className={styles.mainDiv} id={'experience'}>
    <Title><span>Work</span> <br/> <span>Experience</span></Title>
    <div className={styles.timelineContainer}>
    <Blobs type={'v1'} classVariable={`${styles.blob} ${styles.blobV1}`}/>
    <Blobs type={'v2'} classVariable={`${styles.blob} ${styles.blobV2}`}/>
      <div className={styles.timeline}>
        {timelineData.map((item) => (
          <div
            key={item.id}
            className={`${styles.timelineItem} ${styles[item.type]} ${activeItem === item.id ? styles.active : ''}`}
          >
            <div className={styles.timelineDot}>
              {item.type === 'education' ? 
                <FaGraduationCap className={styles.timelineIcon} /> : 
                <FaBriefcase className={styles.timelineIcon} />
              }
            </div>
            <div className={styles.timelineContent}>
            <div className={styles.topRow}>
              <div>
              <div className={styles.timelineYear}>{item.year}</div>
              <h3 className={styles.timelineTitle}>{item.title}</h3>
              <div className={styles.timelineInstitution}>{item.institution}</div>
              </div>
              <button 
                className={`${styles.expandButton} ${activeItem === item.id ? styles.active : ''}`}
                onClick={() => setActiveItem(item.id === activeItem ? null : item.id)}
              >
                <FaChevronDown />
              </button>
              </div>
              <div className={`${styles.timelineDescription} ${activeItem === item.id ? styles.active : ''}`}>
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default WorkExperience;
