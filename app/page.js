import React from "react";
import Hero from '@/components/Blocks/Hero/Hero';
import ExperienceBlock from "@/components/Blocks/Experience/Experience";
import SkillSet from "@/components/Blocks/SkillSet/SkillSet";
import BoldTitle from "@/components/UI/Cards/BoldTitle/BoldTitle";

export default function Home() {
    return (
        <>
            <Hero/>
            <SkillSet/>
            <ExperienceBlock/>
            <BoldTitle/>
        </>
    )
}
