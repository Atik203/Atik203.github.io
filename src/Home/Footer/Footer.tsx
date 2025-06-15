import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const Footer: React.FC = () => {
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
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/atikur-rahaman-203cba/",
      icon: FaLinkedin,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.2)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Md. Atikur Rahaman
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                Full Stack Developer with 2+ years of experience building modern
                web applications. Passionate about creating innovative solutions
                with cutting-edge technologies.
              </p>
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-white">
                Let's Work Together
              </h4>
              <p className="text-gray-200 leading-relaxed text-lg">
                Ready to bring your ideas to life? I'm always excited to work on
                new projects and collaborate with amazing people.
              </p>
              <Button variant="premium" size="lg" asChild className="w-fit">
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  <FaHeart className="w-5 h-5" />
                  Get In Touch
                </ScrollLink>
              </Button>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-200 hover:translate-x-2 transform"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </nav>
          </motion.div>

          {/* Social Links & Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="lg"
                    asChild
                    className="text-gray-300 hover:text-white p-3"
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="group"
                    >
                      <IconComponent className="w-8 h-8 group-hover:scale-110 transition-transform duration-200" />
                    </a>
                  </Button>
                );
              })}
            </div>

            {/* Back to Top */}
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToTop}
              className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40"
            >
              <FiArrowUp className="w-5 h-5" />
              Back to Top
            </Button>
          </motion.div>
        </div>

        <Separator className="my-12 bg-white/20" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-200 text-lg font-medium">
            © 2025 Md. Atikur Rahaman. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
