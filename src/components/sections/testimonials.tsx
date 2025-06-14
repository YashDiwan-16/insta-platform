"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "ShillCoin has revolutionized how I think about my social media content. Now I can truly own and monetize my digital presence.",
    author: "Sarah Chen",
    role: "Content Creator",
    image: "/testimonials/sarah.jpg",
  },
  {
    content: "The recovery mechanism is a game-changer. I never have to worry about losing access to my tokens.",
    author: "Michael Rodriguez",
    role: "Digital Artist",
    image: "/testimonials/michael.jpg",
  },
  {
    content: "Finally, a platform that understands the value of social media content and helps creators maintain ownership.",
    author: "Emma Thompson",
    role: "Social Media Influencer",
    image: "/testimonials/emma.jpg",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50 to-white" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
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
            What Our <span className="text-gradient">Users Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of content creators who are already using ShillCoin to tokenize their social media presence.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="glass-effect rounded-2xl p-8 md:p-12 h-full">
                  <div className="flex flex-col items-center text-center">
                    <Quote className="w-12 h-12 text-violet-500 mb-6" />
                    <p className="text-xl md:text-2xl text-gray-700 mb-8">
                      {testimonials[current].content}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {testimonials[current].author[0]}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonials[current].author}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {testimonials[current].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-violet-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-violet-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrent(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === current
                    ? 'bg-violet-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 