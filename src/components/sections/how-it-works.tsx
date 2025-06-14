"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, 
  Wallet, 
  Share2, 
  Shield, 
  TrendingUp, 
  Users,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  LucideIcon
} from 'lucide-react';

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  demoImage: string;
}

const steps: Step[] = [
  {
    icon: Upload,
    title: 'Connect Your Social Media',
    description: 'Link your Instagram, Twitter, or Threads account to get started.',
    gradient: 'from-violet-500 to-cyan-500',
    demoImage: '/demo/connect-social.png',
  },
  {
    icon: Wallet,
    title: 'Connect Your Wallet',
    description: 'Link your Algorand wallet to mint and manage your tokens.',
    gradient: 'from-cyan-500 to-violet-500',
    demoImage: '/demo/connect-wallet.png',
  },
  {
    icon: Share2,
    title: 'Select Posts to Tokenize',
    description: 'Choose your favorite posts to transform into digital tokens.',
    gradient: 'from-violet-500 to-cyan-500',
    demoImage: '/demo/select-posts.png',
  },
  {
    icon: Shield,
    title: 'Secure Recovery Setup',
    description: 'Set up your recovery mechanism to protect your tokens.',
    gradient: 'from-cyan-500 to-violet-500',
    demoImage: '/demo/recovery-setup.png',
  },
  {
    icon: TrendingUp,
    title: 'Mint Your Tokens',
    description: 'Create permanent digital tokens of your content.',
    gradient: 'from-violet-500 to-cyan-500',
    demoImage: '/demo/mint-tokens.png',
  },
  {
    icon: Users,
    title: 'Share & Engage',
    description: 'Share your tokens and build your community.',
    gradient: 'from-cyan-500 to-violet-500',
    demoImage: '/demo/share-engage.png',
  },
];

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Works
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your social media content into valuable digital assets in just a few simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-6 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-primary/60" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl" />
          <div 
            className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Demo Content */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative">
                {/* Demo Image */}
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                        {React.createElement(steps[currentStep].icon, { className: "w-8 h-8 text-primary" })}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{steps[currentStep].title}</h3>
                      <p className="text-muted-foreground">{steps[currentStep].description}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </button>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={prevStep}
                          className="p-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={nextStep}
                          className="p-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {steps.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentStep(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            currentStep === index ? 'bg-primary' : 'bg-primary/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 