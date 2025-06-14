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
  },
  {
    title: 'Easy Recovery',
    description: 'Recover your tokens even if you lose your wallet, thanks to our innovative recovery mechanism.',
    icon: RefreshCw,
  },
  {
    title: 'Social Sharing',
    description: 'Share your tokenized posts across platforms while maintaining ownership and attribution.',
    icon: Share2,
  },
  {
    title: 'Value Growth',
    description: 'Your tokens can appreciate in value as your content gains popularity and engagement.',
    icon: TrendingUp,
  },
  {
    title: 'Community Building',
    description: 'Build a community around your content through token ownership and engagement.',
    icon: Users,
  },
  {
    title: 'Wallet Integration',
    description: 'Seamlessly connect your existing wallet to start tokenizing your content.',
    icon: Wallet,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-violet-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">
            Powerful Features for{' '}
            <span className="text-gradient">Content Creators</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
              className="feature-card group"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 