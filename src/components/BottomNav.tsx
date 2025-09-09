'use client';



import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { House, UserRound, Newspaper, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';


const navItems = [
  { href: '/', icon: <House size={22} /> },
  { href: '/tentang', icon: <UserRound size={22} /> },
  { href: '/blog', icon: <Newspaper size={22} /> },
  { href: '/kontak', icon: <Mail size={22} /> },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [hide, setHide] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const footer = document.querySelector('footer');
    if (!footer) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setHide(entry.isIntersecting);
      },
      { root: null, threshold: 0.01 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[min(340px,92%)] z-50 md:hidden"
          ref={observerRef}
        >
          <div className="glass flex justify-between px-3 py-2 shadow-glass rounded-full bg-blue-glass-gradient backdrop-blur-2xl border border-white/20">
            {navItems.map(i => (
              <Link key={i.href} href={i.href} className="flex-1 text-center">
                <motion.div whileTap={{ scale: 0.88 }} className={pathname === i.href ? 'text-blue-400' : 'text-white/70'}>
                  <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200">
                    {i.icon}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}