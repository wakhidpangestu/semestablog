'use client';

import React, { useState, useMemo } from 'react';
import CategoryPills from '@/components/CategoryPills';
import { posts } from '@/data/posts';
import PostCard from '@/components/PostCard';
import GlassCard from '@/components/GlassCard';
import SearchBar from '@/components/SearchBar';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const categories = useMemo(() => {
    const unique = Array.from(new Set(posts.map(p => p.category)));
    // Remove all 'Semua' from data, then add only one at the front
    return ['Semua', ...unique.filter(cat => cat && cat.toLowerCase() !== 'semua')];
  }, []);
  const trendingPosts = useMemo(() => [...posts].sort((a, b) => b.trendingScore - a.trendingScore).slice(0, 6), []);
  const latestPosts = useMemo(() => [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 6), []);
  const filteredPosts = useMemo(() => posts.filter(p => {
    if (selectedCategory && selectedCategory !== 'Semua' && p.category !== selectedCategory) return false;
    if (!searchQuery) return true;
    return (
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.tags && p.tags.join(' ').toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }), [searchQuery, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          SemestaBlog
        </h1>
        <p className="text-xl text-white/70 mb-8">
          Concise, inspiring science articles
        </p>
        

        <div className="max-w-2xl mx-auto mb-2 md:mb-6">
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="mb-4 md:mb-10 -mt-2 md:mt-0">
        <CategoryPills
          categories={categories}
          active={selectedCategory}
          onChange={c => setSelectedCategory(c ?? 'Semua')}
        />
      </div>

      {/* Search Results or Content Sections */}
      {searchQuery ? (
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            Search Results for &ldquo;{searchQuery}&rdquo;
          </h2>
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <GlassCard className="p-8 text-center">
              <p className="text-white/70">
                No results found. Try another keyword.
              </p>
            </GlassCard>
          )}
        </div>
      ) : (
        <>
          {/* Trending Posts */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">🔥 Trending</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingPosts
                .filter(post => selectedCategory === 'Semua' || post.category === selectedCategory)
                .map((post, index) => (
                  <PostCard 
                    key={post.id} 
                    post={post} 
                    featured={index === 0}
                  />
                ))}
            </div>
          </section>

          {/* Latest Posts */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">📚 Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestPosts
                .filter(post => selectedCategory === 'Semua' || post.category === selectedCategory)
                .map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}