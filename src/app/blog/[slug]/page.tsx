"use client";
import Link from 'next/link';
import { getPostBySlug, allPosts } from '@/data/posts';
import GlassCard from '@/components/GlassCard';
import MDRenderer from '@/components/MDRenderer';
import { Calendar, User, ArrowLeft, Share2, Copy, Instagram, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function BlogPostPage() {
  const { slug } = useParams();
  const [shareUrl, setShareUrl] = useState('');
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);

  // Only run window-dependent code on client
  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  // Ensure getPostBySlug does not depend on window or shareUrl
  const post = getPostBySlug(typeof slug === 'string' ? slug : Array.isArray(slug) ? slug[0] : '');

  if (!post) return <div className="text-center text-red-500 py-12">Post not found.</div>;
    const handleCopy = async () => {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    };
    const handleShare = (platform: 'whatsapp' | 'instagram') => {
      let url = '';
      if (platform === 'whatsapp') {
        url = `https://wa.me/?text=${encodeURIComponent(post.title + ' ' + shareUrl)}`;
      } else if (platform === 'instagram') {
        url = `https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`;
      }
      window.open(url, '_blank');
    };
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const categoryColors: Record<string, string> = {
    Biology: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
    Technology: 'bg-orange-500/20 text-orange-300 border-orange-400/30',
  };

  // Get related posts by category and tags
  const relatedPosts = allPosts
    .filter(p => p.id !== post.id && (
      p.category === post.category || 
      p.tags.some(tag => post.tags.includes(tag))
    ))
    .slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Back Button */}
      <div className="mb-6">
        <Link 
          href="/blog"
          className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Article Header */}
      <GlassCard className="p-8 mb-8">
        <div className="mb-6">
          <span className={`
            px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm
            ${categoryColors[post.category]}
          `}>
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {post.title}
        </h1>

        <p className="text-xl text-white/80 mb-6">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-6 text-white/60 mb-6">
          <div className="flex items-center space-x-2">
            <User size={18} />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar size={18} />
            <span>{formattedDate}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      </GlassCard>

      {/* Hero Image */}
      <GlassCard className="mb-8 overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
          {post.heroImage ? (
            <img
              src={post.heroImage}
              alt={post.title}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          ) : (
            <div className="text-white/50 text-8xl">📊</div>
          )}
        </div>
      </GlassCard>

      {/* Article Content */}
      <GlassCard className="p-8 mb-8">
        <MDRenderer content={post.content} />
      </GlassCard>

      {/* Share Section */}
      <GlassCard className="p-6 mb-8 relative">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Share this article</h3>
          <button
            className="p-2 rounded-lg bg-white/10 text-white/80 hover:bg-blue-500/20 transition-colors relative"
            onClick={() => setShowShare(v => !v)}
            aria-label="Share"
          >
            <Share2 size={20} />
          </button>
        </div>
        {showShare && (
          <div className="absolute right-6 top-16 z-50 min-w-[180px] bg-white/90 dark:bg-slate-900/95 border border-white/30 dark:border-slate-700 rounded-xl shadow-xl p-3 flex flex-col gap-2 animate-fade-in">
            <button
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-100/60 dark:hover:bg-slate-800/60 text-gray-900 dark:text-white transition-colors"
              onClick={handleCopy}
            >
              <Copy size={18} />
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
            <button
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-green-100/60 dark:hover:bg-green-900/60 text-green-700 dark:text-green-200 transition-colors"
              onClick={() => handleShare('whatsapp')}
            >
              <MessageCircle size={18} />
              WhatsApp
            </button>
            <button
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-pink-100/60 dark:hover:bg-pink-900/60 text-pink-700 dark:text-pink-200 transition-colors"
              onClick={() => handleShare('instagram')}
            >
              <Instagram size={18} />
              Instagram
            </button>
          </div>
        )}
      </GlassCard>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <GlassCard key={relatedPost.id} className="overflow-hidden">
                <Link href={`/blog/${relatedPost.slug}`}>
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    {relatedPost.heroImage ? (
                      <img
                        src={relatedPost.heroImage}
                        alt={relatedPost.title}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    ) : (
                      <div className="text-white/50 text-4xl">📊</div>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-white mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-white/70 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}