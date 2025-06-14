"use client";

import { motion } from 'framer-motion';
import { 
  Upload, 
  Wallet, 
  Share2, 
  Shield, 
  TrendingUp, 
  Users 
} from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Connect Your Social Media',
    description: 'Link your Instagram, Twitter, or Threads account to get started.',
    gradient: 'from-violet-500 to-cyan-500',
  },
  {
    icon: Wallet,
    title: 'Connect Your Wallet',
    description: 'Link your Algorand wallet to mint and manage your tokens.',
    gradient: 'from-cyan-500 to-violet-500',
  },
  {
    icon: Share2,
    title: 'Select Posts to Tokenize',
    description: 'Choose your favorite posts to transform into digital tokens.',
    gradient: 'from-violet-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Secure Recovery Setup',
    description: 'Set up your recovery mechanism to protect your tokens.',
    gradient: 'from-cyan-500 to-violet-500',
  },
  {
    icon: TrendingUp,
    title: 'Mint Your Tokens',
    description: 'Create permanent digital tokens of your content.',
    gradient: 'from-violet-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Share & Engage',
    description: 'Share your tokens and build your community.',
    gradient: 'from-cyan-500 to-violet-500',
  },
];

const HowItWorks = () => {
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
          <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-4">Interactive Demo Coming Soon</p>
                <div className="flex justify-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 