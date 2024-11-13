'use client'
import React, { useState } from 'react';
import styles from './WorkExperience.module.scss';
import { FaChevronDown, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

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
        year: "Jan 2024 - Sept 2024",
        title: "Web Application Developer",
        institution: "Northeastern University",
        description: "• Developed RESTful APIs with Spring Boot & Hibernate achieving sub-second response times\n" +
          "• Reduced processing time by 40% using Apache Camel parallel threading\n" +
          "• Migrated SOAP to REST APIs, increasing transaction capacity by 50%\n" +
          "• Managed 30+ projects using Agile/Kanban methodologies\n" +
          "• Enhanced security with Tomcat 9 upgrade and SonarQube implementation",
        type: "work"
      },
    {
      id: 3,
      year: "Sept 2020 - Aug 2023",
      title: "Full Stack Developer",
      institution: "Standard Chartered Bank",
      description: "• Developed RESTful APIs with Spring Boot & Hibernate achieving sub-second response times\n" +
        "• Reduced processing time by 40% using Apache Camel parallel threading\n" +
        "• Migrated SOAP to REST APIs, increasing transaction capacity by 50%\n" +
        "• Managed 30+ projects using Agile/Kanban methodologies\n" +
        "• Enhanced security with Tomcat 9 upgrade and SonarQube implementation",
      type: "work"
    },
    {
      id: 4,
      year: "Aug 2016 - April 2020",
      title: "Bachelor Engineering",
      institution: "College of Engineering Guindy, Anna University",
      description: "• Secured top grades in Data Structures and Object-Oriented Programming\n" +
        "• Completed practical training in OOP Lab with hands-on Java programming\n" +
        "• Developed strong foundation in programming alongside electronics expertise",
      type: "education"
    }
  ];

  return (
    <div className={styles.timelineContainer} id={'experience'}>
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
  );
}

export default WorkExperience;
