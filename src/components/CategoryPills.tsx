'use client'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export default function CategoryPills({ categories, active, onChange }: { categories: string[], active: string | null, onChange: (c: string | null) => void }){
  return (
    <div className="w-full flex justify-center mt-8">
  <div className="glass rounded-full backdrop-blur-2xl px-4 py-2 flex gap-2 shadow-glass border border-white/20 bg-blue-glass-gradient max-w-2xl mx-auto shadow-2xl overflow-x-auto whitespace-nowrap scrollbar-hide">
        {categories.map(cat => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.06 }}
            onClick={() => onChange(cat === 'Semua' ? null : cat)}
            className={clsx(
              'glass-sm px-3 py-1 rounded-full transition-all',
              (active === null && cat === 'Semua') || active === cat
                ? 'bg-blue-500/20 text-blue-700 dark:text-blue-200'
                : 'text-gray-800 dark:text-white/80 hover:text-blue-700 dark:hover:text-blue-200'
            )}
          >{cat}</motion.button>
        ))}
      </div>
    </div>
  )
}
