"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-violet-50 pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-100/50 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-violet-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 grid-pattern opacity-50" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-xl mb-4 sm:mb-6"
          >
            Tokenize Your Favorite Posts from{' '}
            <span className="text-gradient">
              Instagram, Twitter, and Threads
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto"
          >
            Create permanent, ownable digital tokens of your content. Even recover them if your wallet is lost.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="#launch" className="btn-primary group">
              Launch App
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#how-it-works" className="btn-secondary">
              See How It Works
            </Link>
          </motion.div>
        </motion.div>

        {/* Mockup Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-12 md:mt-16 relative"
        >
          <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] glass-effect rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10" />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="text-center">
                <p className="text-gray-500 text-base sm:text-lg mb-4">Post Preview Coming Soon</p>
                <div className="flex justify-center gap-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-violet-500 animate-pulse-slow" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-cyan-500 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-violet-500 animate-pulse-slow" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 