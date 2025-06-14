"use client";

import { motion } from 'framer-motion';
import { 
  Lock, 
  RefreshCw, 
  Share2, 
  TrendingUp, 
  Users, 
  Wallet 
} from 'lucide-react';

const features = [
  {
    title: 'Permanent Ownership',
    description: 'Create digital tokens that represent your social media posts, ensuring permanent ownership and control.',
    icon: Lock,
    gradient: 'from-violet-500 to-cyan-500',
  },
  {
    title: 'Easy Recovery',
    description: 'Recover your tokens even if you lose your wallet, thanks to our innovative recovery mechanism.',
    icon: RefreshCw,
    gradient: 'from-cyan-500 to-violet-500',
  },
  {
    title: 'Social Sharing',
    description: 'Share your tokenized posts across platforms while maintaining ownership and attribution.',
    icon: Share2,
    gradient: 'from-violet-500 to-cyan-500',
  },
  {
    title: 'Value Growth',
    description: 'Your tokens can appreciate in value as your content gains popularity and engagement.',
    icon: TrendingUp,
    gradient: 'from-cyan-500 to-violet-500',
  },
  {
    title: 'Community Building',
    description: 'Build a community around your content through token ownership and engagement.',
    icon: Users,
    gradient: 'from-violet-500 to-cyan-500',
  },
  {
    title: 'Wallet Integration',
    description: 'Seamlessly connect your existing wallet to start tokenizing your content.',
    icon: Wallet,
    gradient: 'from-cyan-500 to-violet-500',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
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
            Powerful Features for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Content Creators
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your social media presence into valuable digital assets with our comprehensive suite of features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-6 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 