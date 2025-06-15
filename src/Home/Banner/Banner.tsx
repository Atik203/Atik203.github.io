import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiAward, FiDownload } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import img from "../../../public/banner-image.png";

gsap.registerPlugin(ScrollTrigger);

const Banner: React.FC = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [30, -30]);
  const rotateY = useTransform(x, [-300, 300], [-30, 30]);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = profileRef.current?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  useEffect(() => {
    // Advanced GSAP animations
    const tl = gsap.timeline();

    // Text animations
    if (textRef.current) {
      tl.fromTo(
        textRef.current.children,
        {
          y: 100,
          opacity: 0,
          rotationX: 90,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
        }
      );
    }
    // GSAP animations for profile image
    if (profileRef.current) {
      gsap.fromTo(
        profileRef.current,
        {
          scale: 0.8,
          opacity: 0,
          rotateY: 45,
        },
        {
          scale: 1,
          opacity: 1,
          rotateY: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          delay: 0.5,
        }
      );
    }

    // GSAP animations for stats cards
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.children,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          delay: 1,
        }
      );
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {" "}
          {/* Content Section */}
          <motion.div
            ref={textRef}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "hsl(var(--primary) / 0.2)",
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <FiAward className="w-4 h-4" />
                </motion.div>
                2+ Years Experience
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Hi, I am{" "}
                <motion.span
                  className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Atikur
                </motion.span>
              </motion.h1>

              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                <span className="text-muted-foreground">I'm a </span>
                <span className="text-primary">
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Developer",
                        "MERN Stack Expert",
                        "React Specialist",
                        "Frontend Architect",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 100,
                    }}
                  />
                </span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              Passionate Full Stack Developer with{" "}
              <span className="text-primary font-semibold">
                2+ years of experience
              </span>{" "}
              building modern web applications. I've successfully delivered{" "}
              <span className="text-primary font-semibold">
                10+ client projects
              </span>{" "}
              using cutting-edge technologies like React, Next.js, Node.js, and
              TypeScript.
            </motion.p>

            {/* Stats Cards */}
            <motion.div
              ref={statsRef}
              variants={itemVariants}
              className="grid grid-cols-3 gap-4"
            >
              <Card className="text-center p-4 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Exp</div>
                </CardContent>
              </Card>

              <Card className="text-center p-4 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </CardContent>
              </Card>

              <Card className="text-center p-4 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">
                    Technologies
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                variant="premium"
                size="lg"
                asChild
                className="group py-3"
              >
                <a
                  href="https://drive.google.com/uc?export=download&id=1ylDoDxYxYV4RLdgFGmw-zF62X9lg8QJs"
                  rel="noreferrer"
                  download
                >
                  <FiDownload className="w-8 h-8 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>{" "}
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-14 h-14 group hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                  asChild
                >
                  <a
                    href="https://github.com/Atik203"
                    rel="noreferrer"
                    target="_blank"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-8 h-8 text-gray-600 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white transition-colors duration-200" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-14 h-14 group hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/atikur-rahaman-203cba/"
                    rel="noreferrer"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-8 h-8 text-blue-600 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300 transition-colors duration-200" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>{" "}
          {/* Profile Image Section */}
          <motion.div className="relative" style={{ perspective: 1000 }}>
            <motion.div
              ref={profileRef}
              className="relative z-10"
              style={{ rotateX, rotateY }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="relative group">
                {/* Animated gradient background */}
                <motion.div
                  className="absolute -inset-6 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-30"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Profile Image with Advanced Effects */}
                <motion.img
                  src={img}
                  alt="Atikur Rahaman"
                  className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                  whileHover={{
                    scale: 1.1,
                    filter: "brightness(1.1)",
                  }}
                  transition={{ duration: 0.3 }}
                  drag
                  dragConstraints={{
                    left: -100,
                    right: 100,
                    top: -100,
                    bottom: 100,
                  }}
                  dragElastic={0.2}
                />

                {/* Interactive glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Enhanced Floating elements */}
            <motion.div
              className="absolute top-10 -left-10 w-20 h-20 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-20"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-10 -right-10 w-16 h-16 bg-gradient-to-r from-blue-500 to-primary rounded-full opacity-30"
              animate={{
                y: [0, 15, 0],
                x: [0, 10, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* Code symbols floating */}
            <motion.div
              className="absolute top-1/4 -right-20 text-4xl text-primary/20"
              animate={{
                y: [0, -30, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {"</>"}
            </motion.div>

            <motion.div
              className="absolute bottom-1/4 -left-20 text-3xl text-purple-500/20"
              animate={{
                y: [0, 20, 0],
                rotate: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              {"{}"}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
