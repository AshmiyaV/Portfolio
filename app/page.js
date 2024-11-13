import React from "react";
import Hero from '@/components/Blocks/Hero/Hero';
// import SkillSet from "@/components/Blocks/SkillSet/SkillSet";
// import SkillList from "@/components/Blocks/SkillSet/SkillsList";
import SkillsMain from "@/components/Blocks/SkillSet/SkillsMain";
import Projects from "@/components/Blocks/Projects/Projects";
import WorkExperience from "@/components/Blocks/WorkExperience/WorkExperience";
import Resume from "@/components/Blocks/Resume/Resume";

export default function Home() {
    return (
        <>
            <Hero/>
            <SkillsMain id="skills" />
            {/* <SkillSet /> */}
            {/* <SkillList id="skills" /> */}
            <WorkExperience />
            <Projects
            id = "projects"
            className = "odd"
            projectTitle="locALL"
            projectDesc="A community-focused web platform that connects people with local events, marketplace activities, and community support services based on their location. The platform enables users to organize events, buy/sell items, share excess food, coordinate donations, and stay updated with local happenings and weather conditions, all within their specific zip code area."
            projectLink="https://github.com/AshmiyaV/loc-all"
             />
            <Projects
            projectTitle="CloudNotifyOps"
            projectDesc="A serverless architecture on Google Cloud Platform that automates real-time notifications and database operations using Cloud Functions and Pub/Sub. The project implements Infrastructure as Code with Terraform and includes CI/CD through GitHub Actions, making it a comprehensive solution for managing cloud-based notification systems and operational tasks."
            projectLink="https://github.com/AshmiyaV/CloudGuard"
            />
            <Resume />
        </>
    )
}
