'use client';

import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ 
  onSearch, 
  placeholder = "Cari artikel sains...", 
  className = "" 
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(query);
    }, 300);
    return () => clearTimeout(debounceTimer);
  }, [query, onSearch]);

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className={`w-full flex justify-center mt-6 ${className}`}>
      <motion.div
        animate={{ width: isFocused ? 480 : 340 }}
        className={`glass flex items-center gap-3 px-4 py-2 transition-all duration-300 border border-white/20 dark:border-white/20 bg-white/40 dark:bg-white/10 backdrop-blur-2xl shadow-glass rounded-full relative overflow-visible
          ${isFocused ? 'ring-2 ring-blue-400/50 border-blue-400/30' : 'hover:border-white/30'} ${isFocused ? 'shadow-xl' : ''}
        `}
        style={{ zIndex: 1 }}
      >
        {/* Neon border animation */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full border border-transparent neon-anim-border"
          style={{
            zIndex: 2,
            pointerEvents: 'none',
            boxShadow: isFocused
              ? '0 0 4px 1px rgba(59,130,246,0.13), 0 0 8px 2px rgba(59,130,246,0.08)'
              : 'none',
            backgroundImage: isFocused
              ? 'linear-gradient(270deg, #60a5fa33 0%, #3b82f633 40%, transparent 60%, transparent 100%)'
              : 'none',
            backgroundSize: isFocused ? '200% 200%' : undefined,
            backgroundRepeat: isFocused ? 'no-repeat' : undefined,
            backgroundPosition: isFocused ? '100% 50%' : undefined,
            opacity: isFocused ? 0.50 : 0,
            transition: 'opacity 0.5s',
            animation: isFocused ? 'neon-move-left 3.5s linear infinite' : 'none',
          }}
        />
<Search className="text-gray-700 dark:text-white/60" size={20} />
<input
  type="text"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  onFocus={() => setIsFocused(true)}
  onBlur={() => setIsFocused(false)}
  placeholder={placeholder}
  className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 outline-none"
/>
{query && (
  <button
    onClick={handleClear}
    className="text-gray-500 dark:text-white/60 hover:text-blue-500 dark:hover:text-white transition-colors ml-2"
    aria-label="Bersihkan pencarian"
  >
    <X size={18} />
  </button>
)}
      </motion.div>
    </div>
  );
}