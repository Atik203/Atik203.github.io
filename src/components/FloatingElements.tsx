import { motion } from "framer-motion";
import React from "react";

const FloatingElements: React.FC = () => {
  const shapes = [
    { id: 1, size: 60, color: "bg-blue-500/20", delay: 0 },
    { id: 2, size: 40, color: "bg-purple-500/20", delay: 2 },
    { id: 3, size: 80, color: "bg-pink-500/20", delay: 4 },
    { id: 4, size: 30, color: "bg-indigo-500/20", delay: 1 },
    { id: 5, size: 50, color: "bg-cyan-500/20", delay: 3 },
    { id: 6, size: 35, color: "bg-violet-500/20", delay: 5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full ${shape.color} blur-sm`}
          style={{
            width: shape.size,
            height: shape.size,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + shape.size,
          }}
          animate={{
            y: -shape.size,
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: shape.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
