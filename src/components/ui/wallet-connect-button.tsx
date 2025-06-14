"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useWallet } from '@/context/wallet-context';
import { Wallet } from 'lucide-react';

export function WalletConnectButton() {
  const { isConnected, address, connect, disconnect } = useWallet();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (isConnected) {
      disconnect();
    } else {
      connect();
    }
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      className={`
        relative group px-4 py-2 rounded-xl font-medium
        transition-all duration-300 ease-in-out
        ${isConnected 
          ? 'bg-primary/10 text-primary hover:bg-primary/20' 
          : 'bg-primary text-white hover:bg-primary/90'
        }
      `}
    >
      <div className="flex items-center gap-2">
        <Wallet className="w-4 h-4" />
        <span>
          {isConnected ? formatAddress(address!) : 'Connect Wallet'}
        </span>
      </div>
      
      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
} 