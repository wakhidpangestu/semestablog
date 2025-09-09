"use client";
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import clsx from 'clsx';

const MENU = [
  { key: 'trending', label: 'Sedang Tren', href: '/' },
  { key: 'about', label: 'Tentang', href: '/tentang' },
  { key: 'blog', label: 'Blog', href: '/blog' },
  { key: 'contact', label: 'Kontak', href: '/kontak' },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed left-1/2 transform -translate-x-1/2 top-6 z-40 hidden md:block">
      <motion.div
        layout
        className="glass flex items-center gap-6 px-6 py-2 shadow-glass rounded-full bg-blue-glass-gradient backdrop-blur-2xl border border-white/20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      >
        <div className="flex items-center gap-2">
          {MENU.map(item => (
            <NavItem key={item.key} item={item} active={pathname === item.href || (pathname?.startsWith('/blog') && item.key === 'blog')} />
          ))}
        </div>
      </motion.div>
    </nav>
  );
}

type MenuItem = { key: string; label: string; href: string };
function NavItem({ item, active }: { item: MenuItem; active: boolean }) {
  const animate = { scale: active ? 1.05 : 1 };
  return (
    <Link href={item.href} className="relative">
      <motion.div
        whileHover={{ scale: 1.06 }}
        animate={animate}
        transition={{ type: 'spring', stiffness: 300 }}
        className={clsx(
          'px-3 py-1 rounded-full text-sm cursor-pointer transition-colors',
          active
            ? 'bg-blue-500/20 text-blue-700 dark:text-blue-200'
            : 'text-gray-800 dark:text-white/80 hover:text-blue-700 dark:hover:text-blue-200'
        )}
      >
        {item.label}
      </motion.div>
    </Link>
  );
}
