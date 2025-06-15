import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import {
  FaCode,
  FaDatabase,
  FaMobile,
  FaPalette,
  FaReact,
  FaServer,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Service: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations for service cards
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".service-card");

      gsap.fromTo(
        cards,
        {
          y: 80,
          opacity: 0,
          scale: 0.8,
          rotateY: 45,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateY: 0,
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

  const services = [
    {
      icon: FaCode,
      title: "Full Stack Development",
      description:
        "Complete web application development from frontend to backend with modern technologies and best practices.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      icon: FaReact,
      title: "React Development",
      description:
        "Building dynamic, responsive user interfaces with React, Next.js, and modern state management solutions.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description:
        "Scalable server-side solutions using Node.js, Express.js, and cloud technologies for robust applications.",
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
    },
    {
      icon: FaDatabase,
      title: "Database Design",
      description:
        "Efficient database architecture and management with MongoDB, PostgreSQL, and modern data solutions.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
    },
    {
      icon: FaMobile,
      title: "Responsive Design",
      description:
        "Mobile-first, responsive web applications that work seamlessly across all devices and screen sizes.",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
    },
    {
      icon: FaPalette,
      title: "UI/UX Implementation",
      description:
        "Converting designs into pixel-perfect, interactive user interfaces with modern animation and effects.",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50 dark:bg-pink-950/20",
    },
  ];

  return (
    <section
      id="service"
      className="py-24 bg-gradient-to-br from-background via-accent/5 to-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={servicesRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              <FaCode className="w-4 h-4" />
              Professional Services
            </div>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
              What I Offer
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive web development services with{" "}
              <span className="text-primary font-semibold">
                2+ years of experience
              </span>{" "}
              delivering high-quality solutions for diverse clients
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            ref={cardsRef}
            variants={itemVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className={`service-card group relative overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${service.bgColor}`}
                >
                  <CardHeader className="relative">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>

                  {/* Hover Effect Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>
                </Card>
              );
            })}
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6 pt-8"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's collaborate to bring your ideas to life with modern,
                scalable, and user-friendly solutions.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-purple-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get In Touch
                </motion.a>

                <motion.a
                  href="#project"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary/20 text-primary rounded-xl font-semibold hover:bg-primary/5 transition-all duration-300"
                >
                  View Portfolio
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
