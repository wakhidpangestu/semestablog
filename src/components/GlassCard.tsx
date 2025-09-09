'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`
        backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl
        shadow-lg shadow-black/5
        ${hover ? 'hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1' : ''}
        transition-all duration-300
        ${className}
      `}
      whileHover={hover ? { y: -4, scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}