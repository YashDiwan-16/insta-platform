"use client";

import { motion } from "framer-motion";
import { ThemeSwitcher } from "../theme-switcher";
import { ArrowRight, Twitter, Instagram, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Theme Switcher */}
          <div className="absolute top-4 right-4">
            <ThemeSwitcher />
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Tokenize Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                Social Media Posts
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Create permanent, ownable digital tokens from your favorite social media posts.
              Even recover them if your wallet is lost.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-3 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors">
              Get Started
              <ArrowRight className="inline-block w-4 h-4 ml-2" />
            </button>
            <button className="px-8 py-3 text-sm font-medium text-foreground bg-secondary rounded-full hover:bg-secondary/80 transition-colors">
              Learn More
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6 pt-8"
          >
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default Hero; 