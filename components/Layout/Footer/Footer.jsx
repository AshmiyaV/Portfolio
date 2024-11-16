'use client';

import React from 'react';
import styles from './Footer.module.scss';
import Link from "next/link";
import commonConfig from '@/database/config/metadata.json';
import Logo from '@/components/UI/Elements/Logo/Logo';
import { getCurrentYear } from "@/utils/utils.js";
import SocialLinks from "@/components/UI/Cards/SocialLinks/SocialLinks";
import NavDetailed from "@/components/UI/Cards/NavDetailed/NavDetailed";
import Blobs from "@/components/UI/Elements/Blobs/Blobs";

export default function Footer() {

    // const container = useRef(null);
    // const footerBottom = useRef(null);
    const currentYear = getCurrentYear();

    return (
        <footer className={styles.footer} id={'footer'}>
            <Blobs type={'v1'} classVariable={`${styles.blob}`}/>
            <div className={styles.inner}>
                <div className={styles.connect}>
                    <h2 className={styles.title}>
                        <span>Let's</span>  <br/>Connect.
                    </h2>

                    <Link className={styles.email} href={`mailto:${commonConfig.personal.email}`}>
                        {commonConfig.personal.email}
                    </Link>

                    <SocialLinks></SocialLinks>

                </div>

                <div className={styles.nav}>
                    <NavDetailed></NavDetailed>
                </div>

                <div className={styles.bottom}>
                    <Logo classVariable={styles.badge}></Logo>
                    <div className={styles.copyright}>&copy; {currentYear} {commonConfig.personal.name} {commonConfig.personal.surname}
                        <br/>
                        {/* Powered by&nbsp;
                        Vercel,&nbsp;
                        Next.js, and &nbsp; */}
                        <Link href="https://github.com/AshmiyaV/Portfolio">GitHub</Link>.
                        <br/>
                    </div>
                </div>
            </div>
        </footer>
    )
}