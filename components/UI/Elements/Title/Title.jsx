'use client';

import React, { useEffect, useState } from "react";
import styles from "./Title.module.scss"; // Import the SCSS module

const Title = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const elementTop = ref.current.getBoundingClientRect().top;
        const elementBottom = ref.current.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;

        if (elementTop < viewportHeight && elementBottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.fadeInUp} ${isVisible ? styles.visible : ""}`}
    >
      {children}
    </div>
  );
};

export default Title;
