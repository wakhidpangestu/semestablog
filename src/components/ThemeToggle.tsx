"use client";
import { useTheme } from 'next-themes';
import { Sun, Moon, Laptop2 } from 'lucide-react';

const options = [
  { value: 'light', icon: <Sun size={18} />, label: 'Terang' },
  { value: 'dark', icon: <Moon size={18} />, label: 'Gelap' },
  { value: 'system', icon: <Laptop2 size={18} />, label: 'Sistem' },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex gap-1 items-center">
      {options.map(opt => (
        <button
          key={opt.value}
          type="button"
          aria-label={opt.label}
          onClick={() => setTheme(opt.value)}
          className={`w-9 h-9 flex items-center justify-center rounded-full border transition-colors
            ${theme === opt.value
              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 border-blue-400 font-bold'
              : 'bg-white/10 dark:bg-slate-800/30 text-gray-900 dark:text-white/70 border-white/20 hover:bg-blue-50 dark:hover:bg-slate-700'}
          `}
        >
          {opt.icon}
        </button>
      ))}
    </div>
  );
}
