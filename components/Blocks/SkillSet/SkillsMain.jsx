'use client';

import React, {useRef, useState} from 'react';

import styles from './SkillSet.module.scss';

import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {Draggable} from "gsap/Draggable";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import Title from "@/components/UI/Elements/Title/Title";
import Blobs from "@/components/UI/Elements/Blobs/Blobs";
import LineSwitch from '@/components/UI/Elements/LineSwitch/LineSwitch';
import SkillSet from './SkillSet';
import SkillCard from './SkillsList';

export default function SkillsMain() {
    const [selectedView, setSelectedView] = useState("circular")
    gsap.registerPlugin(Draggable, 
        // InertiaPlugin,
         MotionPathPlugin, ScrollTrigger);

    const container = useRef();
    const collisionDiv = useRef();

    const handleSelectedView = (view) => {
        setSelectedView(view)
    };

    return (
        <>
            <section className={`${styles.section}`} id={'skills'} ref={container}>
                <div className={styles.blobs}>
                    <Blobs type={'v2'} classVariable={`${styles.blob} ${styles.blobV2}`}/>
                    <Blobs type={'v1'} classVariable={`${styles.blob} ${styles.blobV1}`}/>
                </div>
                    {/* <Title color={'white'}><span>My</span> <br/> <span>Skillset</span></Title> */}
                    <Title>
                    <span>My</span> <br/> <span>Skillset</span>
      </Title>
                    <LineSwitch Name="SkillsView" leftLabel="Circular" rightLabel="List" onToggle={handleSelectedView} />
                    {
                        selectedView === "circular" ?
                        (
                            <SkillSet />
                        )
                        : (<SkillCard />)
                    }
            </section>
        </>
    )
}