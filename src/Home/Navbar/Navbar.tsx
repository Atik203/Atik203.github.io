import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", to: "home" },
    { name: "Skills", to: "skill" },
    { name: "Services", to: "service" },
    { name: "Projects", to: "project" },
    { name: "About", to: "about" },
    { name: "Contact", to: "contact" },
  ];
  const ScrollLinkItem = ({ name, to }: { name: string; to: string }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.1,
      }}
      className="relative z-50"
      style={{ pointerEvents: "auto" }}
    >
      <ScrollLink
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={300}
        className={cn(
          navigationMenuTriggerStyle(),
          "cursor-pointer transition-all duration-150 hover:text-primary font-semibold text-base px-6 py-3 hover:bg-primary/10 active:bg-primary/20 relative z-50"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        style={{
          pointerEvents: "auto",
          zIndex: 50,
          position: "relative",
        }}
      >
        {name}
      </ScrollLink>
    </motion.div>
  );
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 relative z-50"
      style={{ pointerEvents: "auto" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="flex h-16 items-center justify-between relative z-50">
          {" "}
          {/* Logo */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                duration: 0.1,
              }}
            >
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
                className="cursor-pointer text-3xl font-bold bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent transition-all duration-150"
              >
                Atik
              </ScrollLink>
            </motion.div>
          </motion.div>
          {/* Desktop Navigation */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="hidden md:block"
          >
            {" "}
            <NavigationMenu className="relative z-50">
              <NavigationMenuList className="space-x-2 relative z-50">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.15,
                      delay: index * 0.02,
                      ease: "easeOut",
                    }}
                    className="relative z-50"
                    style={{ pointerEvents: "auto" }}
                  >
                    <NavigationMenuItem className="relative z-50">
                      <ScrollLinkItem name={item.name} to={item.to} />
                    </NavigationMenuItem>
                  </motion.div>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </motion.div>{" "}
          {/* Theme Toggle and Mobile Menu Button */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="flex items-center space-x-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                duration: 0.1,
              }}
            >
              <ThemeToggle />
            </motion.div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  duration: 0.1,
                }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-expanded={isMobileMenuOpen}
                  aria-label="Toggle main menu"
                  className="relative z-50 transition-all duration-150 hover:bg-primary/10 active:bg-primary/20"
                >
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                      >
                        <X className="h-6 w-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 45, opacity: 0, scale: 0.8 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: -45, opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                      >
                        <Menu className="h-6 w-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>{" "}
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="space-y-2 px-2 pb-6 pt-4 sm:px-3 bg-background/95 backdrop-blur border-t">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.15,
                      delay: index * 0.03,
                      ease: "easeOut",
                    }}
                    className="block"
                  >
                    <ScrollLinkItem name={item.name} to={item.to} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
