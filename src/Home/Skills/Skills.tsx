import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { Progress } from "../../components/ui/progress";
import { Skill } from "../../types";

gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations for skill bars
    if (skillsRef.current) {
      const skillBars = skillsRef.current.querySelectorAll(".skill-bar");

      gsap.fromTo(
        skillBars,
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // GSAP animations for tech icons
    if (iconsRef.current) {
      const icons = iconsRef.current.querySelectorAll(".tech-icon");

      gsap.fromTo(
        icons,
        {
          scale: 0,
          rotation: 180,
          opacity: 0,
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: iconsRef.current,
            start: "top 90%",
            end: "bottom 10%",
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };
  const frontendSkills: Skill[] = [
    { id: 1, name: "React JS", level: 95, category: "frontend", icon: "react" },
    { id: 2, name: "JavaScript", level: 95, category: "frontend", icon: "js" },
    {
      id: 3,
      name: "Tailwind CSS",
      level: 95,
      category: "frontend",
      icon: "tailwind",
    },
    { id: 4, name: "TypeScript", level: 80, category: "frontend", icon: "ts" },
    { id: 5, name: "Redux", level: 70, category: "frontend", icon: "redux" },
    { id: 6, name: "Next.js", level: 50, category: "frontend", icon: "nextjs" },
  ];

  const backendSkills: Skill[] = [
    { id: 7, name: "Node.js", level: 80, category: "backend", icon: "nodejs" },
    {
      id: 8,
      name: "Express.js",
      level: 85,
      category: "backend",
      icon: "express",
    },
    { id: 9, name: "MongoDB", level: 85, category: "backend", icon: "mongodb" },
    {
      id: 10,
      name: "Firebase",
      level: 75,
      category: "backend",
      icon: "firebase",
    },
    { id: 11, name: "MySQL", level: 70, category: "backend", icon: "mysql" },
  ];

  const tools: Skill[] = [
    { id: 12, name: "Git", level: 90, category: "tools", icon: "git" },
    { id: 13, name: "GitHub", level: 95, category: "tools", icon: "github" },
    { id: 14, name: "VS Code", level: 95, category: "tools", icon: "vscode" },
    { id: 15, name: "Figma", level: 75, category: "tools", icon: "figma" },
    { id: 16, name: "Postman", level: 80, category: "tools", icon: "postman" },
  ];
  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <motion.div
      className="skill-bar w-full mx-auto mb-6 p-4 rounded-xl border-2 border-primary/20 dark:border-primary/30 hover:border-primary/40 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 dark:bg-card/50 backdrop-blur-sm dark:shadow-lg dark:shadow-primary/5"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex items-center gap-4 mb-3">
        <motion.img
          src={`https://skillicons.dev/icons?i=${skill.icon}`}
          alt={`${skill.name} Icon`}
          className="w-10 h-10 skill-icon-hover"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
        />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-foreground font-semibold text-lg">
              {skill.name}
            </h3>{" "}
            <motion.span
              className="text-sm text-primary font-bold bg-primary/10 dark:bg-primary/20 border-2 border-primary/30 dark:border-primary/40 px-3 py-1 rounded-full backdrop-blur-sm"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              {skill.level}%
            </motion.span>
          </div>
          <Progress
            value={skill.level}
            className="w-full h-3 bg-secondary/50"
          />
        </div>
      </div>
    </motion.div>
  );
  const frontendTechs = [
    { name: "HTML5", icon: "html" },
    { name: "CSS3", icon: "css" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "Material UI", icon: "materialui" },
    { name: "Sass", icon: "sass" },
    { name: "Vue.js", icon: "vue" },
  ];

  const backendTechs = [
    { name: "Python", icon: "python" },
    { name: "Java", icon: "java" },
    { name: "PHP", icon: "php" },
    { name: "Laravel", icon: "laravel" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Redis", icon: "redis" },
  ];

  const toolsList = [
    { name: "Docker", icon: "docker" },
    { name: "Kubernetes", icon: "kubernetes" },
    { name: "AWS", icon: "aws" },
    { name: "Linux", icon: "linux" },
    { name: "Nginx", icon: "nginx" },
    { name: "Jenkins", icon: "jenkins" },
  ];
  return (
    <section
      id="skill"
      className="py-24 border-b border-border/20 dark:border-border/40"
    >
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
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mastering modern technologies to build exceptional digital
              experiences
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Frontend Skills */}
            <motion.div
              variants={itemVariants}
              className="mb-16"
              ref={skillsRef}
            >
              <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3">
                <span className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                Frontend Development
                <span className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {frontendSkills.map((skill) => (
                  <SkillBar key={skill.id} skill={skill} />
                ))}{" "}
              </div>

              {/* Frontend Technologies */}
              <div className="mt-8">
                <div
                  className="flex flex-wrap items-center gap-4 justify-center"
                  ref={iconsRef}
                >
                  {frontendTechs.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="tech-icon flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/30 dark:border-blue-500/40 text-blue-600 dark:text-blue-400 px-4 py-3 rounded-xl font-medium hover:scale-110 transition-all duration-300 cursor-pointer backdrop-blur-sm hover:border-blue-500/50 dark:hover:border-blue-500/60"
                      whileHover={{ y: -5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <img
                        src={`https://skillicons.dev/icons?i=${tech.icon}`}
                        alt={`${tech.name} Icon`}
                        className="w-6 h-6"
                      />
                      <span className="text-sm font-semibold">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3">
                <span className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></span>
                Backend Development
                <span className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {backendSkills.map((skill) => (
                  <SkillBar key={skill.id} skill={skill} />
                ))}
              </div>

              {/* Backend Technologies */}
              <div className="mt-8">
                <div className="flex flex-wrap items-center gap-4 justify-center">
                  {backendTechs.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="tech-icon flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 border border-green-500/30 dark:border-green-500/40 text-green-600 dark:text-green-400 px-4 py-3 rounded-xl font-medium hover:scale-110 transition-all duration-300 cursor-pointer backdrop-blur-sm hover:border-green-500/50 dark:hover:border-green-500/60"
                      whileHover={{ y: -5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <img
                        src={`https://skillicons.dev/icons?i=${tech.icon}`}
                        alt={`${tech.name} Icon`}
                        className="w-6 h-6"
                      />
                      <span className="text-sm font-semibold">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tools & Technologies */}
            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3">
                <span className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></span>
                Tools & DevOps
                <span className="w-12 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {tools.map((skill) => (
                  <SkillBar key={skill.id} skill={skill} />
                ))}
              </div>
              {/* Tools Technologies */}
              <div className="mt-8">
                <div className="flex flex-wrap items-center gap-4 justify-center">
                  {toolsList.map((tool, index) => (
                    <motion.div
                      key={index}
                      className="tech-icon flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 border border-orange-500/30 dark:border-orange-500/40 text-orange-600 dark:text-orange-400 px-4 py-3 rounded-xl font-medium hover:scale-110 transition-all duration-300 cursor-pointer backdrop-blur-sm hover:border-orange-500/50 dark:hover:border-orange-500/60"
                      whileHover={{ y: -5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <img
                        src={`https://skillicons.dev/icons?i=${tool.icon}`}
                        alt={`${tool.name} Icon`}
                        className="w-6 h-6"
                      />
                      <span className="text-sm font-semibold">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>{" "}
            </motion.div>

            {/* Technologies Showcase */}
            <motion.div variants={itemVariants} className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3">
                <span className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                All Technologies I Work With
                <span className="w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
              </h3>
              <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 justify-items-center">
                {[
                  "html",
                  "css",
                  "js",
                  "ts",
                  "react",
                  "nextjs",
                  "vue",
                  "angular",
                  "nodejs",
                  "express",
                  "mongodb",
                  "mysql",
                  "postgresql",
                  "firebase",
                  "python",
                  "java",
                  "php",
                  "cpp",
                  "git",
                  "github",
                  "docker",
                  "kubernetes",
                  "aws",
                  "vercel",
                  "netlify",
                  "figma",
                  "vscode",
                  "postman",
                  "tailwind",
                  "bootstrap",
                  "materialui",
                  "redux",
                  "sass",
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="tech-icon group relative flex flex-col items-center p-3 rounded-xl hover:bg-accent/80 dark:hover:bg-accent/60 border-2 border-primary/15 dark:border-primary/20 hover:border-primary/30 dark:hover:border-primary/40 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                    whileHover={{ y: -8, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <img
                      src={`https://skillicons.dev/icons?i=${tech}`}
                      alt={`${tech} Icon`}
                      className="w-12 h-12 transition-transform duration-300"
                    />
                    <span className="text-xs text-muted-foreground mt-2 capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-medium">
                      {tech}
                    </span>
                  </motion.div>
                ))}{" "}
              </div>{" "}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
