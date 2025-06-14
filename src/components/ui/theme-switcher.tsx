"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/theme-context';
import { Sun, Moon, Monitor } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeOption {
  name: string;
  value: Theme;
  icon: React.ElementType;
}

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes: ThemeOption[] = [
    { name: 'Light', value: 'light', icon: Sun },
    { name: 'Dark', value: 'dark', icon: Moon },
    { name: 'System', value: 'system', icon: Monitor },
  ];

  const currentTheme = themes.find((t) => t.value === theme);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          p-2 rounded-xl
          transition-colors duration-200
          ${theme === 'dark' 
            ? 'bg-primary/10 text-primary hover:bg-primary/20' 
            : 'bg-primary/10 text-primary hover:bg-primary/20'
          }
        `}
      >
        {currentTheme?.icon && <currentTheme.icon className="w-5 h-5" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 w-48 rounded-xl border border-border bg-background shadow-lg z-50"
            >
              <div className="py-1">
                {themes.map((themeOption) => (
                  <button
                    key={themeOption.value}
                    onClick={() => {
                      setTheme(themeOption.value);
                      setIsOpen(false);
                    }}
                    className={`
                      w-full px-4 py-2 text-left text-sm
                      flex items-center space-x-2
                      transition-colors duration-200
                      ${theme === themeOption.value
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/80 hover:bg-primary/5 hover:text-primary'
                      }
                    `}
                  >
                    <themeOption.icon className="w-4 h-4" />
                    <span>{themeOption.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 