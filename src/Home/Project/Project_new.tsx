import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { FaCode, FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  stars: number;
  language: string;
  category: "Frontend" | "Backend" | "Full Stack";
}

const Project: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations for project cards
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".project-card");

      gsap.fromTo(
        cards,
        {
          y: 100,
          opacity: 0,
          rotateX: 45,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scale: 1,
          duration: 1,
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

  const projects: Project[] = [
    {
      id: 1,
      title: "ContestHub",
      description: "Dynamic Contest Creation Platform",
      longDescription:
        "ContestHub is a dynamic and user-friendly Project Contest Creation Platform designed to foster creativity, engage communities, and celebrate talent across various domains.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JWT",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/Atik203/ContestHub-Client-Side",
      liveUrl: "https://contesthub.surge.sh",
      image:
        "https://i.ibb.co/3BX33v0/screencapture-contesthub-surge-sh-2023-12-12-22-59-38.png",
      stars: 1,
      language: "JavaScript",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "RestoControl",
      description: "Restaurant Management System",
      longDescription:
        "RestoControl is a sophisticated restaurant management system that seamlessly integrates front-end and back-end technologies to provide an efficient and user-friendly solution for restaurant owners.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
        "Stripe",
      ],
      githubUrl: "https://github.com/Atik203/Restaurant-Management-Client-Side",
      liveUrl: "https://restocontrol.surge.sh",
      image:
        "https://i.ibb.co/Ssd8hwx/screencapture-restocontrol-surge-sh-2023-12-12-23-11-51.png",
      stars: 1,
      language: "JavaScript",
      category: "Full Stack",
    },
    {
      id: 3,
      title: "University Management Backend",
      description: "University Management System API",
      longDescription:
        "This is University Management project backend using TypeScript, Node.js, Express.js, MongoDB, Mongoose, Zod and JWT with comprehensive student and faculty management.",
      technologies: [
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Zod",
        "JWT",
      ],
      githubUrl: "https://github.com/Atik203/University-Management-Backend",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      stars: 1,
      language: "TypeScript",
      category: "Backend",
    },
    {
      id: 4,
      title: "Book Donate Platform",
      description: "Virtual Coin Reward System",
      longDescription:
        "The Book Donation Platform provides a convenient way for users to donate books and earn rewards. The platform incentivizes book donation by offering virtual coins that users can accumulate and redeem.",
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Stripe",
      ],
      githubUrl: "https://github.com/Atik203/Book-Donate",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop",
      stars: 1,
      language: "TypeScript",
      category: "Full Stack",
    },
    {
      id: 5,
      title: "Campers Shop Frontend",
      description: "E-commerce Camping Store",
      longDescription:
        "The Campers Shop Frontend is a React-based web application that serves as the user interface for the Campers Shop. It enables users to browse through a wide range of camping products.",
      technologies: [
        "TypeScript",
        "React",
        "Redux",
        "Tailwind CSS",
        "React Router",
      ],
      githubUrl: "https://github.com/Atik203/Campers-Shop-Frontend",
      image:
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&h=300&fit=crop",
      stars: 1,
      language: "TypeScript",
      category: "Frontend",
    },
    {
      id: 6,
      title: "Library Management System",
      description: "Django-based Library System",
      longDescription:
        "Library Management System using Django with comprehensive book management, user authentication, and borrowing system with admin dashboard.",
      technologies: ["Python", "Django", "SQLite", "Bootstrap", "jQuery"],
      githubUrl: "https://github.com/Atik203/Library-Management-System",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      stars: 1,
      language: "Python",
      category: "Full Stack",
    },
  ];

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

  const getLanguageColor = (language: string) => {
    const colors = {
      JavaScript: "bg-yellow-500",
      TypeScript: "bg-blue-500",
      Python: "bg-green-500",
      Java: "bg-red-500",
      React: "bg-cyan-500",
    };
    return colors[language as keyof typeof colors] || "bg-gray-500";
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Frontend: "bg-gradient-to-r from-purple-500 to-pink-500",
      Backend: "bg-gradient-to-r from-green-500 to-teal-500",
      "Full Stack": "bg-gradient-to-r from-blue-500 to-indigo-500",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gradient-to-r from-gray-500 to-gray-600"
    );
  };

  return (
    <section id="project" className="py-24" ref={projectsRef}>
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
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing my journey through 10+ client projects and personal
              developments
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card group"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full border-primary/20 hover:border-primary/40 overflow-hidden bg-card/50 backdrop-blur-sm">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div
                      className={`absolute top-4 left-4 ${getCategoryColor(
                        project.category
                      )} text-white px-3 py-1 rounded-full text-sm font-semibold`}
                    >
                      {project.category}
                    </div>

                    {/* Language & Stars */}
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <div
                        className={`${getLanguageColor(
                          project.language
                        )} w-3 h-3 rounded-full`}
                      ></div>
                      <div className="flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                        <FaStar className="w-3 h-3" />
                        {project.stars}
                      </div>
                    </div>
                  </div>

                  <CardHeader className="space-y-3">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 pt-4">
                      <Button
                        variant="default"
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="w-4 h-4" />
                          Code
                        </a>
                      </Button>

                      {project.liveUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex-1"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaExternalLinkAlt className="w-4 h-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center">
            <Button variant="premium" size="lg" asChild className="group">
              <a
                href="https://github.com/Atik203"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCode className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
