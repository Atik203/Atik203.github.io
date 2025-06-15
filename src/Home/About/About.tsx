import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import {
  FaBriefcase,
  FaCode,
  FaGithub,
  FaLinkedin,
  FaUniversity,
} from "react-icons/fa";
import { FiDownload, FiTrendingUp } from "react-icons/fi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations for cards
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".experience-card");

      gsap.fromTo(
        cards,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-24" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate developer with a journey of continuous learning and
              growth
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Content Section */}
            <motion.div variants={itemVariants} className="space-y-8">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FaCode className="w-6 h-6 text-primary" />
                    Professional Journey
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Hello! I'm{" "}
                    <span className="text-primary font-semibold">
                      Md. Atikur Rahaman
                    </span>
                    , a passionate Full Stack Developer with{" "}
                    <span className="text-primary font-semibold">
                      2+ years of professional experience
                    </span>{" "}
                    in building modern web applications. Currently pursuing
                    Computer Science and Engineering at United International
                    University.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    I specialize in the{" "}
                    <span className="text-primary font-semibold">
                      MERN stack
                    </span>{" "}
                    and have successfully delivered{" "}
                    <span className="text-primary font-semibold">
                      10+ client projects
                    </span>
                    , ranging from e-commerce platforms to enterprise solutions.
                    My expertise lies in creating scalable, user-friendly
                    applications with modern technologies.
                  </p>
                </CardContent>
              </Card>

              {/* Key Achievements */}
              <div ref={cardsRef} className="grid grid-cols-2 gap-4">
                <Card className="experience-card text-center p-6 border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
                  <CardContent className="p-0 space-y-2">
                    <FaBriefcase className="w-8 h-8 text-primary mx-auto" />
                    <div className="text-2xl font-bold text-primary">2+</div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                  </CardContent>
                </Card>

                <Card className="experience-card text-center p-6 border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
                  <CardContent className="p-0 space-y-2">
                    <FiTrendingUp className="w-8 h-8 text-primary mx-auto" />
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">
                      Client Projects
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="premium" size="lg" asChild className="py-3">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1ylDoDxYxYV4RLdgFGmw-zF62X9lg8QJs"
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
                    className="w-12 h-12 group hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                    asChild
                  >
                    <a
                      href="https://github.com/Atik203"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub className="w-8 h-8 text-gray-600 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white transition-colors duration-200" />
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-12 h-12 group hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/atikur-rahaman-203cba/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin className="w-8 h-8 text-blue-600 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300 transition-colors duration-200" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Timeline Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
                My Journey
              </h3>
              <VerticalTimeline lineColor="hsl(var(--primary))">
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                    color: "hsl(var(--card-foreground))",
                    marginLeft: "6px",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid hsl(var(--border))",
                  }}
                  date="2023 - Present"
                  iconStyle={{
                    background: "hsl(var(--primary))",
                    color: "#fff",
                    boxShadow: "0 0 20px hsl(var(--primary)/0.3)",
                  }}
                  icon={<FaBriefcase />}
                >
                  <h3 className="vertical-timeline-element-title font-bold text-lg">
                    Full Stack Developer
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle text-primary font-semibold">
                    Freelance & Client Projects
                  </h4>
                  <p className="text-muted-foreground">
                    Successfully delivered 10+ client projects using MERN stack,
                    React, Next.js, and modern development practices.
                    Specialized in creating responsive, user-friendly web
                    applications.
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                    color: "hsl(var(--card-foreground))",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid hsl(var(--border))",
                  }}
                  date="2023 - Present"
                  iconStyle={{
                    background: "hsl(var(--secondary))",
                    color: "hsl(var(--secondary-foreground))",
                    boxShadow: "0 0 20px hsl(var(--secondary)/0.3)",
                  }}
                  icon={<FaUniversity />}
                >
                  <h3 className="vertical-timeline-element-title font-bold text-lg">
                    Bachelor of Science in CSE
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle text-primary font-semibold">
                    United International University
                  </h4>
                  <p className="text-muted-foreground">
                    Currently pursuing Computer Science and Engineering with
                    focus on modern web technologies, algorithms, and software
                    engineering principles.
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                    color: "hsl(var(--card-foreground))",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid hsl(var(--border))",
                  }}
                  date="2023"
                  iconStyle={{
                    background: "hsl(var(--accent))",
                    color: "hsl(var(--accent-foreground))",
                    boxShadow: "0 0 20px hsl(var(--accent)/0.3)",
                  }}
                  icon={<FaCode />}
                >
                  <h3 className="vertical-timeline-element-title font-bold text-lg">
                    Started Web Development Journey
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle text-primary font-semibold">
                    Self-taught & Dedicated Learning
                  </h4>
                  <p className="text-muted-foreground">
                    Began intensive learning of modern web technologies
                    including React, Node.js, MongoDB, and JavaScript frameworks
                    through hands-on projects and continuous practice.
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
