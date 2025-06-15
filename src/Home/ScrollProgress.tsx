import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollProgress: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const scrollListener = () => {
      setScrollY(window.scrollY);
    };

    const calculateScrollPercentage = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage =
        (scrollY / (documentHeight - windowHeight)) * 100;
      return scrollPercentage;
    };

    const updateProgressBar = () => {
      const scrollPercentage = calculateScrollPercentage();
      controls.start({ width: `${scrollPercentage}%` });
    };

    window.addEventListener("scroll", () => {
      scrollListener();
      updateProgressBar();
    });

    return () => window.removeEventListener("scroll", scrollListener);
  }, [scrollY, controls]);

  return (
    <motion.div
      className="scroll-progress-bar"
      animate={controls}
      initial={{ width: "0%" }}
    />
  );
};

export default ScrollProgress;
