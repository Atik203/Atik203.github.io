import {
  PrivacyPolicyModal,
  TermsOfServiceModal,
} from "@/components/LegalModals";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { generateSitemap } from "@/utils/legal";
import { subscribeToNewsletter } from "@/utils/newsletter";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  FaCode,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaNodeJs,
  FaPhone,
  FaReact,
} from "react-icons/fa";
import { FiArrowUp, FiHeart, FiSend } from "react-icons/fi";
import {
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState("");
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const navigationItems = [
    { name: "Home", to: "home" },
    { name: "Skills", to: "skill" },
    { name: "Services", to: "service" },
    { name: "Projects", to: "project" },
    { name: "About", to: "about" },
    { name: "Contact", to: "contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Atik203",
      icon: FaGithub,
      color: "from-gray-600 to-gray-800",
      hoverColor: "hover:from-gray-500 hover:to-gray-700",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/atikur-rahaman-203cba/",
      icon: FaLinkedin,
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-500 hover:to-blue-700",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/atikur.rahaman.324529",
      icon: FaFacebook,
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:from-blue-400 hover:to-blue-600",
    },
  ];

  const techStack = [
    { name: "React", icon: FaReact, color: "text-blue-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      text: "atikurrahaman0305@gmail.com",
      href: "mailto:atikurrahaman0305@gmail.com",
    },
    {
      icon: FaMapMarkerAlt,
      text: "Dhaka, Bangladesh",
      href: null,
    },
    {
      icon: FaPhone,
      text: "+8801723383575",
      href: "tel:+8801723383575",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isSubscribing) {
      setIsSubscribing(true);
      setSubscriptionMessage("");

      try {
        const result = await subscribeToNewsletter(email);

        if (result.success) {
          setIsSubscribed(true);
          setEmail("");
          setSubscriptionMessage(result.message);
          setTimeout(() => {
            setIsSubscribed(false);
            setSubscriptionMessage("");
          }, 5000);
        } else {
          setSubscriptionMessage(result.message);
          setTimeout(() => setSubscriptionMessage(""), 4000);
        }
      } catch (error) {
        console.error("Subscription error:", error);
        setSubscriptionMessage("Failed to subscribe. Please try again.");
        setTimeout(() => setSubscriptionMessage(""), 4000);
      } finally {
        setIsSubscribing(false);
      }
    }
  };

  const handlePrivacyClick = () => {
    setShowPrivacyModal(true);
  };

  const handleTermsClick = () => {
    setShowTermsModal(true);
  };

  const handleSitemapClick = () => {
    generateSitemap();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.2),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      </div>

      <div className="relative container mx-auto px-8 lg:px-12 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-3">
              <motion.h3
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Md. Atikur Rahaman
              </motion.h3>
              <p className="text-gray-300 text-sm">
                Full Stack Developer crafting exceptional web applications with
                2+ years of experience.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <FaCode className="text-blue-400 w-4 h-4" />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded text-xs border border-white/10 hover:border-white/20 transition-all"
                  >
                    <tech.icon className={`w-3 h-3 ${tech.color}`} />
                    <span className="text-gray-300">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">Follow Me</h4>{" "}
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative"
                    >
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-br ${social.color} hover:${social.hoverColor} transition-all duration-300`}
                      >
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        {social.name}
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Navigation & Contact */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white border-b border-white/20 pb-1">
                Quick Navigation
              </h4>{" "}
              <nav className="grid grid-cols-2 gap-2">
                {navigationItems.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></span>
                    {item.name}
                  </ScrollLink>
                ))}
              </nav>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">Contact Info</h4>
              <div className="space-y-2">
                {contactInfo.slice(0, 2).map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-300 text-xs"
                  >
                    <contact.icon className="w-3 h-3 text-blue-400 flex-shrink-0" />
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="hover:text-white transition-colors hover:underline"
                      >
                        {contact.text}
                      </a>
                    ) : (
                      <span>{contact.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white border-b border-white/20 pb-1">
                Stay Updated
              </h4>
              <p className="text-gray-300 text-xs">
                Get updates on new projects and tech insights!
              </p>{" "}
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm transition-all disabled:opacity-50"
                  required
                  disabled={isSubscribing}
                />
                {subscriptionMessage && (
                  <p
                    className={`text-xs ${
                      isSubscribed ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {subscriptionMessage}
                  </p>
                )}
                <Button
                  type="submit"
                  variant="premium"
                  size="sm"
                  className="w-full text-xs"
                  disabled={isSubscribed || isSubscribing}
                >
                  {isSubscribing ? (
                    <>
                      <div className="w-3 h-3 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Subscribing...
                    </>
                  ) : isSubscribed ? (
                    <>
                      <FiHeart className="w-3 h-3" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      <FiSend className="w-3 h-3" />
                      Subscribe
                    </>
                  )}
                </Button>
              </form>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10 text-xs group"
            >
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FiArrowUp className="w-3 h-3" />
              </motion.div>
              Back to Top
            </Button>
          </motion.div>
        </motion.div>

        <Separator className="my-8 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
        >
          <p className="text-gray-300">
            © 2025 Md. Atikur Rahaman. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <button
              onClick={handlePrivacyClick}
              className="hover:text-white cursor-pointer transition-colors hover:underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={handleTermsClick}
              className="hover:text-white cursor-pointer transition-colors hover:underline"
            >
              Terms of Service
            </button>
            <button
              onClick={handleSitemapClick}
              className="hover:text-white cursor-pointer transition-colors hover:underline"
            >
              Sitemap
            </button>{" "}
          </div>
        </motion.div>
      </div>

      {/* Legal Modals */}
      <PrivacyPolicyModal
        open={showPrivacyModal}
        onOpenChange={setShowPrivacyModal}
      />
      <TermsOfServiceModal
        open={showTermsModal}
        onOpenChange={setShowTermsModal}
      />
    </footer>
  );
};

export default Footer;
