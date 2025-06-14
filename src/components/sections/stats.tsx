"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, Image, TrendingUp, Shield } from 'lucide-react';

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

interface AnimatedCounterProps {
  value: number;
  suffix: string;
  duration?: number;
}

const stats: Stat[] = [
  {
    icon: Users,
    value: 10000,
    suffix: '+',
    label: 'Active Users',
    color: 'from-violet-500 to-violet-600',
  },
  {
    icon: Image,
    value: 50000,
    suffix: '+',
    label: 'Posts Tokenized',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: TrendingUp,
    value: 95,
    suffix: '%',
    label: 'Recovery Success Rate',
    color: 'from-violet-500 to-violet-600',
  },
  {
    icon: Shield,
    value: 100,
    suffix: '%',
    label: 'Secure Transactions',
    color: 'from-cyan-500 to-cyan-600',
  },
];

const AnimatedCounter = ({ value, suffix, duration = 2 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const incrementTime = (duration * 1000) / end;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold">
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-24 relative overflow-hidden">
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
            By The <span className="text-gradient">Numbers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of content creators who trust ShillCoin to tokenize and protect their social media content.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card group"
            >
              <div className="p-6 text-center">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-gradient mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 