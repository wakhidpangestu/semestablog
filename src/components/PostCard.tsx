'use client';

import Link from 'next/link';
import { Post } from '@/types';
import GlassCard from './GlassCard';
import { Calendar, User } from 'lucide-react';

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const categoryColors = {
    Fisika: 'bg-blue-500/20 text-blue-700 dark:text-blue-200 border-blue-400/30',
    Kimia: 'bg-green-500/20 text-green-700 dark:text-green-200 border-green-400/30',
    Matematika: 'bg-purple-500/20 text-purple-700 dark:text-purple-200 border-purple-400/30',
    Biologi: 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-200 border-emerald-400/30',
    Teknologi: 'bg-orange-500/20 text-orange-700 dark:text-orange-200 border-orange-400/30',
  };

  const categoryMap: Record<string, keyof typeof categoryColors> = {
    Physics: 'Fisika',
    Chemistry: 'Kimia',
    Mathematics: 'Matematika',
    Biology: 'Biologi',
    Technology: 'Teknologi',
  };

  return (
    <GlassCard className={`overflow-hidden ${featured ? 'md:col-span-2' : ''}`}>
  <Link href={`/blog/${post.slug}`} className="block hover:no-underline focus:no-underline">
        <div className="relative">
          <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
            {post.heroImage ? (
              <img
                src={post.heroImage}
                alt={post.title}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            ) : (
              <div className="text-gray-400 dark:text-white/60 text-6xl">📊</div>
            )}
          </div>
          <div className="absolute top-4 left-4">
            <span className={`
              px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm
              ${categoryColors[categoryMap[post.category] ?? 'Teknologi']}
            `}>
              {post.category}
            </span>
          </div>
          {post.trendingScore > 85 && (
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 bg-red-500/20 text-red-700 dark:text-red-300 border border-red-400/30 rounded-full text-xs font-medium backdrop-blur-sm">
                🔥 Tren
              </span>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className={`font-bold mb-3 line-clamp-2 ${featured ? 'text-xl' : 'text-lg'} text-gray-800 dark:text-white`}>
            {post.title}
          </h3>
          <p className="mb-4 line-clamp-3 text-gray-800 dark:text-white/80">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-700 dark:text-white/60">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <User size={14} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-white/10 dark:bg-white/10 text-gray-800 dark:text-white/70 rounded-md text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </GlassCard>
  );
}