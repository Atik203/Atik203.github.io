import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiAward, FiDownload } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import img from "../../../public/Untitled design.png";

const Banner: React.FC = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                <FiAward className="w-4 h-4" />
                2+ Years Experience
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                Hi, I am{" "}
                <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Atikur
                </span>
              </h1>

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
                className="group py-4"
              >
                <a
                  href="https://drive.google.com/uc?export=download&id=1ylDoDxYxYV4RLdgFGmw-zF62X9lg8QJs"
                  rel="noreferrer"
                  download
                >
                  <FiDownload className="w-5 h-5 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>

              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://github.com/Atik203"
                    rel="noreferrer"
                    target="_blank"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </Button>

                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/atikur-rahaman-203cba/"
                    rel="noreferrer"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div ref={profileRef} className="relative z-10">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <img
                  src={img}
                  alt="Atikur Rahaman"
                  className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-10 -left-10 w-20 h-20 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute bottom-10 -right-10 w-16 h-16 bg-gradient-to-r from-blue-500 to-primary rounded-full opacity-30 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
