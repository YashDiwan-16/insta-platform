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
    color: 'from-violet-500 to-violet-600',
  },
  {
    icon: Wallet,
    title: 'Connect Your Wallet',
    description: 'Link your Algorand wallet to mint and manage your tokens.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Share2,
    title: 'Select Posts to Tokenize',
    description: 'Choose your favorite posts to transform into digital tokens.',
    color: 'from-violet-500 to-violet-600',
  },
  {
    icon: Shield,
    title: 'Secure Recovery Setup',
    description: 'Set up your recovery mechanism to protect your tokens.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: TrendingUp,
    title: 'Mint Your Tokens',
    description: 'Create permanent digital tokens of your content.',
    color: 'from-violet-500 to-violet-600',
  },
  {
    icon: Users,
    title: 'Share & Engage',
    description: 'Share your tokens and build your community.',
    color: 'from-cyan-500 to-cyan-600',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-violet-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
              className="relative"
            >
              <div className="feature-card group h-full">
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500" />
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
          <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] glass-effect rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-500 text-lg mb-4">Interactive Demo Coming Soon</p>
                <div className="flex justify-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-violet-500 animate-pulse-slow" />
                  <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
                  <div className="w-3 h-3 rounded-full bg-violet-500 animate-pulse-slow" style={{ animationDelay: '1s' }} />
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