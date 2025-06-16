import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";

const AnimatedCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Use motion values for smoother animation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply spring animation for ultra-smooth movement
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, [role="button"], input, textarea, select, .cursor-pointer'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {" "}
      {/* Outer ring with smooth spring animation - increased size */}
      <motion.div
        className="fixed top-0 left-0 w-7 h-7 border border-primary rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.4 : isClicking ? 0.8 : 1,
          borderColor: isHovering ? "#8b5cf6" : "#6366f1",
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 25,
        }}
      />
      {/* Inner dot with delayed smooth animation - increased size */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0 : isClicking ? 1.8 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 25,
        }}
      />
      {/* Trailing effect - increased size */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full pointer-events-none z-40 blur-sm"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.6 : 1,
          opacity: isHovering ? 0.7 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: 0.05,
        }}
      />
    </>
  );
};

export default AnimatedCursor;
