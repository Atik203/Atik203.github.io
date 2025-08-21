import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Button } from "../../components/ui/button";

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
  language: string;
  category: "Frontend" | "Backend" | "Full Stack" | "Desktop";
  // Optional extra repo (e.g., separate frontend + backend)
  frontendGithubUrl?: string;
}

const Project: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

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
  }, [currentPage]);

  const projects: Project[] = [
    // 1. ContestHub
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
      image: "/contest-hub.png",
      language: "JavaScript",
      category: "Full Stack",
    },
    // 2. Campers Shop
    {
      id: 2,
      title: "Campers Shop",
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
      liveUrl: "https://campers-shop-frontend-lac.vercel.app",
      image: "/campers-shop.png",
      language: "TypeScript",
      category: "Frontend",
    },
    // 3. ScholarFlow
    {
      id: 3,
      title: "ScholarFlow",
      description: "AI Research Collaboration Hub (Early Stage)",
      longDescription:
        "Monorepo (Next.js + Express + Prisma + pgvector) for ingesting papers, semantic search, AI summaries, collections & future annotations. Early MVP with progressive feature flags.",
      technologies: [
        "Next.js",
        "Express",
        "Prisma",
        "Postgres",
        "pgvector",
        "Tailwind",
        "Zod",
        "OpenAI",
      ],
      githubUrl: "https://github.com/Atik203/Scholar-Flow",
      image: "/scholar-flow.png",
      language: "TypeScript",
      category: "Full Stack",
    },
    // 4. RestoControl
    {
      id: 4,
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
      image: "/restro-control.png",
      language: "JavaScript",
      category: "Full Stack",
    },
    // 5. Book Donate Platform
    {
      id: 5,
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
      image: "/book-donate.png",
      language: "TypeScript",
      category: "Full Stack",
    },
    // 6. U-eAdmission Online System
    {
      id: 6,
      title: "U-eAdmission Online System",
      description: "JavaFX University Admission Automation",
      longDescription:
        "Comprehensive JavaFX desktop system automating university admission: applications, MCQ exam with anti-cheat monitoring, real-time chat, results & merit list, and admin dashboards.",
      technologies: [
        "Java 21",
        "JavaFX",
        "MySQL",
        "Maven",
        "JUnit 5",
        "MaterialFX",
        "ControlsFX",
        "AtlantaFX",
      ],
      githubUrl: "https://github.com/Atik203/U-eAdmission-Online-System",
      image: "/ueadmission.png",
      language: "Java",
      category: "Desktop",
    },
    // 7. University Management System
    {
      id: 7,
      title: "University Management System",
      description: "University Management System",
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
      frontendGithubUrl:
        "https://github.com/Atik203/University-Management-Frontend",
      image:
        "https://plus.unsplash.com/premium_photo-1681248156502-745ab87474d8?q=80&crop=center&w=600&h=400",
      language: "TypeScript",
      category: "Backend",
    },
    // 8. Library Management System
    {
      id: 8,
      title: "Library Management System",
      description: "Django-based Library System",
      longDescription:
        "Library Management System using Django with comprehensive book management, user authentication, and borrowing system with admin dashboard.",
      technologies: ["Python", "Django", "SQLite", "Bootstrap", "jQuery"],
      githubUrl: "https://github.com/Atik203/Library-Management-System",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center",
      language: "Python",
      category: "Full Stack",
    },
  ];

  // Pagination logic
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
      Desktop: "bg-gradient-to-r from-orange-500 to-amber-500",
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
              Showcasing my journey through projects and personal developments
            </p>
          </motion.div>{" "}
          {/* Projects Grid */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px]"
          >
            {" "}
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card group"
                whileHover={{
                  y: -20,
                  rotateY: 5,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  duration: 0.3,
                }}
                style={{ perspective: 1000 }}
              >
                <Card className="h-full border-primary/20 hover:border-primary/40 overflow-hidden bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 relative">
                  {/* Animated Background Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Project Image */}
                  <div className="relative overflow-hidden h-56 group">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      whileHover={{
                        scale: 1.15,
                        filter: "brightness(1.1) saturate(1.2)",
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />

                    {/* Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0"
                      whileHover={{
                        opacity: 1,
                        x: ["100%", "-100%"],
                      }}
                      transition={{ duration: 0.8 }}
                    />

                    {/* Category Badge with Animation */}
                    <motion.div
                      className={`absolute top-4 left-4 ${getCategoryColor(
                        project.category
                      )} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.category}
                    </motion.div>

                    {/* Language Badge with Pulse Effect */}
                    <motion.div className="absolute top-4 right-4 flex items-center gap-2">
                      <motion.div
                        className={`${getLanguageColor(
                          project.language
                        )} w-3 h-3 rounded-full shadow-lg`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                        {project.language}
                      </div>
                    </motion.div>

                    {/* Hover Overlay with Links */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button
                          variant="secondary"
                          size="icon"
                          asChild
                          className="bg-white/90 hover:bg-white shadow-lg"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View on GitHub"
                          >
                            <FaGithub className="w-5 h-5 text-gray-800" />
                          </a>
                        </Button>
                      </motion.div>

                      {project.liveUrl && (
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: -360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Button
                            variant="secondary"
                            size="icon"
                            asChild
                            className="bg-white/90 hover:bg-white shadow-lg"
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="View Live Demo"
                            >
                              <FaExternalLinkAlt className="w-4 h-4 text-gray-800" />
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>
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
                    <div className="flex items-center gap-3 pt-4 flex-wrap">
                      {/* Primary GitHub (often backend or single repo) */}
                      <Button variant="default" size="sm" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="w-4 h-4" />
                          {project.frontendGithubUrl ? "Backend" : "Code"}
                        </a>
                      </Button>
                      {/* Optional Frontend Repo */}
                      {project.frontendGithubUrl && (
                        <Button variant="secondary" size="sm" asChild>
                          <a
                            href={project.frontendGithubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub className="w-4 h-4" /> Frontend
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaExternalLinkAlt className="w-4 h-4" /> Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              variants={itemVariants}
              className="flex justify-center mt-12"
            >
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() =>
                        handlePageChange(Math.max(1, currentPage - 1))
                      }
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => handlePageChange(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  )}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        handlePageChange(Math.min(totalPages, currentPage + 1))
                      }
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </motion.div>
          )}
          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center">
            <Button variant="premium" size="lg" asChild className="group py-3">
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
