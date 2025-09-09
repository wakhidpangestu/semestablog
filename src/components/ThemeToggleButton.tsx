"use client";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggleButton() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle Theme"
      className="p-2 rounded-full bg-glass backdrop-blur-2xl border border-white/20 shadow-glass transition-colors hover:bg-white/20 dark:hover:bg-slate-800/30"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <span role="img" aria-label="Light mode">☀️</span>
      ) : (
        <span role="img" aria-label="Dark mode">🌙</span>
      )}
    </button>
  );
}
