import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMessageSquare, FiSend, FiUser } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContactFormData } from "../../types";

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>();

  useEffect(() => {
    // GSAP animations for contact form
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        {
          x: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // GSAP animations for contact info
    if (infoRef.current) {
      const items = infoRef.current.querySelectorAll(".contact-item");

      gsap.fromTo(
        items,
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    const { email, subject, message } = data;
    const serviceId = "service_2suk5wm";
    const templateId = "template_3lyq87k";
    const userId = "vRsVS9uPA4-dJP8rv";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        { subject, message, from_email: email },
        userId
      );

      toast.success("Message sent successfully! I'll get back to you soon.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

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

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      content: "atikurrahaman0305@gmail.com",
      link: "mailto:atikurrahaman0305@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      content: "github.com/Atik203",
      link: "https://github.com/Atik203",
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      content: "Connect with me",
      link: "https://www.linkedin.com/in/atikur-rahaman-203cba/",
      color: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-background via-primary/5 to-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={contactRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              <FiMail className="w-4 h-4" />
              Get In Touch
            </div>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Contact Me
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate? Let's discuss your project and bring your
              ideas to life with modern web solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <motion.div
              ref={infoRef}
              variants={itemVariants}
              className="space-y-8"
            >
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Let's Connect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always interested in new opportunities and exciting
                    projects. Whether you have a question, want to collaborate,
                    or just want to say hello, feel free to reach out!
                  </p>

                  <div className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <motion.a
                          key={index}
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          className="contact-item flex items-center gap-4 p-4 rounded-xl border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
                        >
                          <div
                            className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} group-hover:scale-110 transition-transform duration-300`}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {info.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {info.content}
                            </p>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>

                  <div className="pt-6 border-t border-primary/20">
                    <h4 className="font-semibold text-foreground mb-3">
                      Available for:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Freelance Projects",
                        "Full-time Opportunities",
                        "Collaborations",
                        "Consultations",
                      ].map((item, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Send Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {" "}
                    <div className="space-y-6">
                      {/* Email Input */}
                      <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="absolute left-4 top-4 w-5 h-5 text-muted-foreground"
                          whileHover={{
                            scale: 1.2,
                            color: "hsl(var(--primary))",
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiUser className="w-5 h-5" />
                        </motion.div>
                        <motion.input
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email address",
                            },
                          })}
                          type="email"
                          placeholder="Your email address"
                          className="w-full pl-12 pr-4 py-4 bg-background border border-primary/20 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground hover:border-primary/40"
                          whileFocus={{
                            scale: 1.02,
                            borderColor: "hsl(var(--primary))",
                          }}
                          transition={{ duration: 0.2 }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 pointer-events-none"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>

                      {/* Subject Input */}
                      <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="absolute left-4 top-4 w-5 h-5 text-muted-foreground"
                          whileHover={{
                            scale: 1.2,
                            color: "hsl(var(--primary))",
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiMessageSquare className="w-5 h-5" />
                        </motion.div>
                        <motion.input
                          {...register("subject", {
                            required: "Subject is required",
                          })}
                          type="text"
                          placeholder="Subject"
                          className="w-full pl-12 pr-4 py-4 bg-background border border-primary/20 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground hover:border-primary/40"
                          whileFocus={{
                            scale: 1.02,
                            borderColor: "hsl(var(--primary))",
                          }}
                          transition={{ duration: 0.2 }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-blue-500/10 opacity-0 pointer-events-none"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>

                      {/* Message Textarea */}
                      <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="absolute left-4 top-4 w-5 h-5 text-muted-foreground"
                          whileHover={{
                            scale: 1.2,
                            color: "hsl(var(--primary))",
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiMail className="w-5 h-5" />
                        </motion.div>
                        <motion.textarea
                          {...register("message", {
                            required: "Message is required",
                          })}
                          placeholder="Your message..."
                          rows={6}
                          className="w-full pl-12 pr-4 py-4 bg-background border border-primary/20 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none hover:border-primary/40"
                          whileFocus={{
                            scale: 1.02,
                            borderColor: "hsl(var(--primary))",
                          }}
                          transition={{ duration: 0.2 }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-pink-500/10 opacity-0 pointer-events-none"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button
                        type="submit"
                        variant="premium"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full group py-4 relative overflow-hidden"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              className="rounded-full h-6 w-6 border-2 border-white border-t-transparent mr-3"
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <motion.div
                              whileHover={{ x: 4, rotate: 15 }}
                              transition={{ duration: 0.2 }}
                            >
                              <FiSend className="w-6 h-6 mr-3" />
                            </motion.div>
                            Send Message
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.6 }}
                            />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
};

export default Contact;
