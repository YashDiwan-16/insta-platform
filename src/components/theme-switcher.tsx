"use client";

import { useTheme } from '@/context/theme-context';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Laptop } from 'lucide-react';
import { useState } from 'react';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { name: "light", icon: Sun, label: "Light" },
    { name: "dark", icon: Moon, label: "Dark" },
    { name: "system", icon: Laptop, label: "System" },
  ];

  const currentTheme = themes.find((t) => t.name === theme);
  const Icon = currentTheme?.icon || Sun;

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
        aria-label="Toggle theme"
      >
        <Icon className="w-5 h-5 text-foreground" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-48 rounded-xl bg-background border border-border shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="py-1">
              {themes.map(({ name, icon: Icon, label }) => (
                <button
                  key={name}
                  onClick={() => {
                    setTheme(name as "light" | "dark" | "system");
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2 ${
                    theme === name
                      ? "text-primary"
                      : "text-foreground hover:bg-accent"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 