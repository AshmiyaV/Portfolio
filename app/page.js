import React from "react";
import Hero from '@/components/Blocks/Hero/Hero';
import SkillsMain from "@/components/Blocks/SkillSet/SkillsMain";
import Projects from "@/components/Blocks/Projects/Projects";
import WorkExperience from "@/components/Blocks/WorkExperience/WorkExperience";
import Resume from "@/components/Blocks/Resume/Resume";

export default function Home() {
    return (
        <>
            <Hero/>
            <SkillsMain id="skills" />
            <WorkExperience />
            <Projects />
            <Resume />
        </>
    )
}
