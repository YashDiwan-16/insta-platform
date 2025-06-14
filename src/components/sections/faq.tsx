"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is ShillCoin?',
    answer: 'ShillCoin is a platform that allows you to tokenize your social media posts into permanent, ownable digital tokens on the Algorand blockchain. This means you can create unique digital assets from your content and even recover them if you lose access to your wallet.',
  },
  {
    question: 'How does the recovery mechanism work?',
    answer: 'Our innovative recovery mechanism uses your social media identity to verify ownership. If you lose access to your wallet, you can prove your identity through your connected social accounts and regain access to your tokens.',
  },
  {
    question: 'Which social media platforms are supported?',
    answer: 'Currently, we support Instagram, Twitter, and Threads. We\'re working on adding more platforms to give you more options for tokenizing your content.',
  },
  {
    question: 'Is there a limit to how many posts I can tokenize?',
    answer: 'There is no limit to the number of posts you can tokenize. You can create as many tokens as you want from your social media content.',
  },
  {
    question: 'How much does it cost to tokenize a post?',
    answer: 'The cost varies depending on the current network fees on Algorand, but we keep our fees minimal to make tokenization accessible to everyone. You only pay for the actual blockchain transaction.',
  },
  {
    question: 'Can I sell or trade my tokenized posts?',
    answer: 'Yes! Your tokenized posts are fully transferable. You can sell them, trade them, or gift them to others. Each token is unique and can be traded on supported marketplaces.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-violet-50" />
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
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about ShillCoin and how it works.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 glass-effect rounded-xl hover:bg-violet-50/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 