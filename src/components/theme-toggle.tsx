import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-10 w-10 relative overflow-hidden transition-all duration-150 
        !border-2 !border-primary/60 dark:!border-white/80
        hover:!border-primary hover:bg-primary/10 
        active:bg-primary/20 hover:scale-105 active:scale-95
        bg-background/80 dark:bg-background/60 backdrop-blur-sm
        shadow-md dark:shadow-lg dark:shadow-primary/20"
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          >
            <Moon className="h-8 w-8 text-blue-300 dark:text-blue-200" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          >
            <Sun className="h-8 w-8 text-yellow-500 dark:text-yellow-400" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced glow effect */}
      <motion.div
        className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20 opacity-0"
        whileHover={{ opacity: 1 }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          opacity: { duration: 0.15 },
        }}
      />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default ThemeToggle;
