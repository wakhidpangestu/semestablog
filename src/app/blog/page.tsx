'use client';

import { useState } from 'react';
import { allPosts, searchPosts } from '@/data/posts';
import { Category } from '@/types';
import PostCard from '@/components/PostCard';
import SearchBar from '@/components/SearchBar';
import GlassCard from '@/components/GlassCard';

const categories: Category[] = ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Technology'];
const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [currentPage, setCurrentPage] = useState(1);
  
  const filteredPosts = searchQuery 
    ? searchPosts(searchQuery)
    : selectedCategory === 'All' 
      ? allPosts
      : allPosts.filter(post => post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleCategoryChange = (category: Category | 'All') => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(prev => {
      if (prev !== query) {
        setCurrentPage(1);
      }
      return query;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          Science Blog
        </h1>
        <p className="text-white/70 mb-6">
          Explore our collection of science articles
        </p>
        
        <div className="max-w-2xl mx-auto mb-6">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
  <GlassCard className="p-3 rounded-full bg-white/30 dark:bg-slate-900/40 border border-white/20 dark:border-slate-700 backdrop-blur-xl shadow-glass transition-all duration-200">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => handleCategoryChange('All')}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-150 backdrop-blur-md shadow-sm border text-sm
                ${selectedCategory === 'All'
                  ? 'bg-blue-500/30 text-blue-700 dark:text-blue-200 border-blue-400/50'
                  : 'bg-white/10 dark:bg-white/10 text-gray-900 dark:text-white/70 border-white/20 dark:border-slate-700 hover:bg-blue-100/30 dark:hover:bg-blue-900/30'}
              `}
            >
              Semua <span className="opacity-60">({allPosts.length})</span>
            </button>
            {categories.map((category) => {
              const count = allPosts.filter(post => post.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-150 backdrop-blur-md shadow-sm border text-sm
                    ${selectedCategory === category
                      ? 'bg-blue-500/30 text-blue-700 dark:text-blue-200 border-blue-400/50'
                      : 'bg-white/10 dark:bg-white/10 text-gray-900 dark:text-white/70 border-white/20 dark:border-slate-700 hover:bg-blue-100/30 dark:hover:bg-blue-900/30'}
                  `}
                >
                  {category} <span className="opacity-60">({count})</span>
                </button>
              );
            })}
          </div>
        </GlassCard>
      </div>

      {/* Results Info */}
      <div className="mb-6">
        <p className="text-white/60">
          {searchQuery ? (
            <>Showing {filteredPosts.length} results for &ldquo;{searchQuery}&rdquo;</>
          ) : (
            <>Showing {filteredPosts.length} articles {selectedCategory !== 'All' && `in ${selectedCategory}`}</>
          )}
        </p>
      </div>

      {/* Posts Grid */}
      {paginatedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <GlassCard className="p-8 text-center">
          <p className="text-white/70">
            No articles found. Try adjusting your search or category filter.
          </p>
        </GlassCard>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center">
          <GlassCard className="p-2">
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    currentPage === page
                      ? 'bg-blue-500/30 text-blue-300 border border-blue-400/50'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Next
              </button>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
}